import { create } from 'zustand';
import type { Project, AgentRun } from '@/types';

export interface ProjectStore {
  projects: Project[];
  activeProjectId: string | null;
  agentRuns: AgentRun[];
  setProjects: (projects: Project[]) => void;
  setActiveProjectId: (id: string | null) => void;
  addAgentRun: (run: AgentRun) => void;
  setAgentRuns: (runs: AgentRun[]) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  activeProjectId: null,
  agentRuns: [],
  setProjects: (projects) => set({ projects }),
  setActiveProjectId: (id) => set({ activeProjectId: id }),
  addAgentRun: (run) => set((state) => ({ agentRuns: [...state.agentRuns, run] })),
  setAgentRuns: (runs) => set({ agentRuns: runs }),
}));
