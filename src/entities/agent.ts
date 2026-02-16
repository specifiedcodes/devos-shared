import type { AgentType, AgentStatus, AgentActivityStatus } from '../enums/agent.enums.js';

/**
 * Agent entity interface
 * Maps to: devos-api/src/database/entities/agent.entity.ts
 */
export interface IAgent {
  id: string;
  name: string;
  type: AgentType;
  status: AgentStatus;
  activityStatus: AgentActivityStatus | null;
  activityStatusSince: string | null;
  activityMessage: string | null;
  workspaceId: string;
  projectId: string | null;
  createdBy: string;
  config: Record<string, unknown> | null;
  context: Record<string, unknown> | null;
  currentTask: string | null;
  errorMessage: string | null;
  startedAt: string | null;
  completedAt: string | null;
  lastHeartbeat: string | null;
  createdAt: string;
  updatedAt: string;
}
