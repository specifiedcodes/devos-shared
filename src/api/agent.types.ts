/** POST /api/agents */
export interface CreateAgentRequest {
  name: string;
  type: string;
  workspaceId: string;
  projectId?: string;
  config?: Record<string, unknown>;
}

/** PATCH /api/agents/:id */
export interface UpdateAgentRequest {
  status?: string;
  currentTask?: string;
  config?: Record<string, unknown>;
}

/** Agent list query parameters */
export interface ListAgentsQuery {
  workspaceId: string;
  projectId?: string;
  type?: string;
  status?: string;
  page?: number;
  limit?: number;
}

/** Agent status update event */
export interface AgentStatusUpdateResponse {
  id: string;
  agentId: string;
  status: string;
  activityStatus: string;
  message?: string;
  timestamp: string;
}
