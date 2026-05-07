import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Play, CheckCircle, XCircle, Clock, Loader, FolderOpen } from 'lucide-react';
import { useProjectStore } from '@/store/projectStore';
import type { Project, AgentRun } from '@/types';

export default function DashboardPage() {
  const { projects, agentRuns, setProjects, setActiveProjectId, setAgentRuns } = useProjectStore();
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [showNewProject, setShowNewProject] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateProject = () => {
    if (!newProjectName.trim()) return;
    setIsCreating(true);
    const newProject: Project = {
      id: Date.now().toString(),
      name: newProjectName.trim(),
      description: newProjectDesc.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setProjects([...projects, newProject]);
    setNewProjectName('');
    setNewProjectDesc('');
    setShowNewProject(false);
    setIsCreating(false);
  };

  const recentRuns = agentRuns.slice(-5).reverse();

  const getStatusIcon = (status: AgentRun['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle size={16} className="text-green-400" />;
      case 'failed': return <XCircle size={16} className="text-red-400" />;
      case 'running': return <Loader size={16} className="text-blue-400" />;
      case 'pending': return <Clock size={16} className="text-yellow-400" />;
      default: return null;
    }
  };

  const getStatusLabel = (status: AgentRun['status']) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'failed': return 'Failed';
      case 'running': return 'Running';
      case 'pending': return 'Pending';
      default: return status;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', padding: '2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.25rem' }}>Dashboard</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Manage your projects and agent runs</p>
          </div>
          <button
            onClick={() => setShowNewProject(true)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--gradient-primary)', color: '#fff',
              fontWeight: 600, padding: '0.6rem 1.25rem',
              borderRadius: '9999px', border: 'none', cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            <Plus size={16} /> New Project
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Projects', value: projects.length },
            { label: 'Agent Runs', value: agentRuns.length },
            { label: 'Completed Runs', value: agentRuns.filter(r => r.status === 'completed').length },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: 'var(--gradient-card)', border: '1px solid var(--color-border)',
              borderRadius: '1rem', padding: '1.25rem',
            }}>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{stat.label}</p>
              <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text)' }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* New Project Form */}
        {showNewProject && (
          <div style={{
            background: 'var(--gradient-card)', border: '1px solid var(--color-border)',
            borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem',
          }}>
            <h2 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 700 }}>Create New Project</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                placeholder="Project name"
                style={{
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem', padding: '0.6rem 1rem', color: 'var(--color-text)',
                  fontSize: '0.95rem', outline: 'none',
                }}
              />
              <input
                value={newProjectDesc}
                onChange={(e) => setNewProjectDesc(e.target.value)}
                placeholder="Description (optional)"
                style={{
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem', padding: '0.6rem 1rem', color: 'var(--color-text)',
                  fontSize: '0.95rem', outline: 'none',
                }}
              />
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={handleCreateProject}
                  disabled={isCreating || !newProjectName.trim()}
                  style={{
                    background: 'var(--gradient-primary)', color: '#fff',
                    border: 'none', borderRadius: '0.5rem',
                    padding: '0.6rem 1.25rem', cursor: 'pointer',
                    fontWeight: 600, fontSize: '0.9rem',
                  }}
                >
                  Create Project
                </button>
                <button
                  onClick={() => setShowNewProject(false)}
                  style={{
                    background: 'transparent', color: 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)', borderRadius: '0.5rem',
                    padding: '0.6rem 1.25rem', cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Projects */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>Projects</h2>
          {projects.length === 0 ? (
            <div style={{
              background: 'var(--gradient-card)', border: '1px solid var(--color-border)',
              borderRadius: '1rem', padding: '3rem', textAlign: 'center',
            }}>
              <FolderOpen size={40} style={{ color: 'var(--color-text-subtle)', margin: '0 auto 1rem' }} />
              <p style={{ color: 'var(--color-text-muted)' }}>No projects yet. Create your first project to get started.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  onClick={() => setActiveProjectId(project.id)}
                  style={{
                    background: 'var(--gradient-card)', border: '1px solid var(--color-border)',
                    borderRadius: '1rem', padding: '1.25rem', textDecoration: 'none',
                    display: 'block', transition: 'border-color 0.2s',
                  }}
                >
                  <h3 style={{ color: 'var(--color-text)', fontWeight: 700, marginBottom: '0.5rem' }}>{project.name}</h3>
                  {project.description && (
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{project.description}</p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-subtle)', fontSize: '0.75rem' }}>
                    <Play size={12} />
                    <span>{agentRuns.filter(r => r.projectId === project.id).length} runs</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Agent Runs */}
        <div>
          <h2 style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>Recent Agent Runs</h2>
          {recentRuns.length === 0 ? (
            <div style={{
              background: 'var(--gradient-card)', border: '1px solid var(--color-border)',
              borderRadius: '1rem', padding: '2rem', textAlign: 'center',
            }}>
              <p style={{ color: 'var(--color-text-muted)' }}>No agent runs yet.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentRuns.map((run) => (
                <div key={run.id} style={{
                  background: 'var(--gradient-card)', border: '1px solid var(--color-border)',
                  borderRadius: '0.75rem', padding: '1rem',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}>
                  {getStatusIcon(run.status)}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: 'var(--color-text)', fontSize: '0.9rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {run.prompt}
                    </p>
                    <p style={{ color: 'var(--color-text-subtle)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                      {new Date(run.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    color: run.status === 'completed' ? '#4ade80'
                      : run.status === 'failed' ? '#f87171'
                      : run.status === 'running' ? '#60a5fa'
                      : '#fbbf24',
                  }}>
                    {getStatusLabel(run.status)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
