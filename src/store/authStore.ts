import { create } from 'zustand';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  twoFactorEnabled: boolean;
  twoFactorSecret?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  twoFactorPending: boolean;
  pendingEmail: string | null;
  login: (email: string, password: string) => Promise<{ requires2FA: boolean }>;
  verify2FA: (token: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  setup2FA: () => Promise<{ secret: string; otpauthUrl: string }>;
  enable2FA: (token: string) => Promise<boolean>;
  disable2FA: (token: string) => Promise<boolean>;
}

const MOCK_USERS: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'password123',
    name: 'Demo User',
    twoFactorEnabled: false,
  },
];

let tempUsers = [...MOCK_USERS];

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  twoFactorPending: false,
  pendingEmail: null,

  login: async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    const found = tempUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error('Invalid email or password');

    if (found.twoFactorEnabled) {
      set({ twoFactorPending: true, pendingEmail: email });
      return { requires2FA: true };
    }

    const { password: _pw, ...user } = found;
    set({ user, isAuthenticated: true, twoFactorPending: false, pendingEmail: null });
    return { requires2FA: false };
  },

  verify2FA: async (token: string) => {
    await new Promise((r) => setTimeout(r, 400));
    const { pendingEmail } = get();
    const found = tempUsers.find((u) => u.email === pendingEmail);
    if (!found) return false;

    // In a real app, verify TOTP token here
    // For demo, accept any 6-digit token
    if (!/^\d{6}$/.test(token)) return false;

    const { password: _pw, ...user } = found;
    set({ user, isAuthenticated: true, twoFactorPending: false, pendingEmail: null });
    return true;
  },

  register: async (email: string, password: string, name: string) => {
    await new Promise((r) => setTimeout(r, 600));
    const exists = tempUsers.find((u) => u.email === email);
    if (exists) throw new Error('Email already in use');

    const newUser: User & { password: string } = {
      id: String(Date.now()),
      email,
      password,
      name,
      twoFactorEnabled: false,
    };
    tempUsers = [...tempUsers, newUser];
    const { password: _pw, ...user } = newUser;
    set({ user, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false, twoFactorPending: false, pendingEmail: null });
  },

  setup2FA: async () => {
    await new Promise((r) => setTimeout(r, 300));
    const secret = 'JBSWY3DPEHPK3PXP';
    const { user } = get();
    const otpauthUrl = `otpauth://totp/AgentAI:${user?.email}?secret=${secret}&issuer=AgentAI`;
    return { secret, otpauthUrl };
  },

  enable2FA: async (token: string) => {
    await new Promise((r) => setTimeout(r, 400));
    if (!/^\d{6}$/.test(token)) return false;
    const { user } = get();
    if (!user) return false;
    const updatedUser = { ...user, twoFactorEnabled: true };
    tempUsers = tempUsers.map((u) =>
      u.id === user.id ? { ...u, twoFactorEnabled: true } : u
    );
    set({ user: updatedUser });
    return true;
  },

  disable2FA: async (token: string) => {
    await new Promise((r) => setTimeout(r, 400));
    if (!/^\d{6}$/.test(token)) return false;
    const { user } = get();
    if (!user) return false;
    const updatedUser = { ...user, twoFactorEnabled: false };
    tempUsers = tempUsers.map((u) =>
      u.id === user.id ? { ...u, twoFactorEnabled: false } : u
    );
    set({ user: updatedUser });
    return true;
  },
}));
