/**
 * WebSocket event payload types.
 * These define the data shape for each WebSocket event.
 */

/** Kanban story moved event payload */
export interface KanbanStoryMovedPayload {
  storyId: string;
  storyKey: string;
  fromStatus: string;
  toStatus: string;
  position: number;
  movedBy: string;
  timestamp: string;
}

/** Kanban story created event payload */
export interface KanbanStoryCreatedPayload {
  story: {
    id: string;
    storyKey: string;
    title: string;
    status: string;
    priority: string;
    storyPoints?: number;
    position: number;
  };
  timestamp: string;
}

/** CLI output event payload */
export interface CliOutputPayload {
  sessionId: string;
  agentId: string;
  line: string;
  lineNumber: number;
  timestamp: string;
}

/** CLI session lifecycle event payload */
export interface CliSessionEventPayload {
  sessionId: string;
  agentId: string;
  agentType: string;
  projectId?: string;
  storyKey?: string;
  timestamp: string;
}

/** Chat message event payload */
export interface ChatMessagePayload {
  id: string;
  senderType: string;
  agentType?: string;
  agentId?: string;
  userId?: string;
  text: string;
  isStatusUpdate: boolean;
  metadata?: Record<string, unknown>;
  conversationId?: string;
  roomId?: string;
  createdAt: string;
}

/** Agent status changed event payload */
export interface AgentStatusChangedPayload {
  agentId: string;
  agentName: string;
  agentType: string;
  previousStatus: string;
  newStatus: string;
  activityStatus?: string;
  message?: string;
  timestamp: string;
}

/** Notification event payload */
export interface NotificationPayload {
  id: string;
  type: string;
  title: string;
  message: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

/** Cost update event payload */
export interface CostUpdatePayload {
  workspaceId: string;
  totalCostUsd: number;
  dailyCostUsd: number;
  provider: string;
  model: string;
  timestamp: string;
}

/** Deployment status event payload */
export interface DeploymentStatusPayload {
  projectId: string;
  platform: string;
  environment: string;
  status: string;
  deploymentId?: string;
  url?: string;
  error?: string;
  timestamp: string;
}

/** Room format for WebSocket subscriptions */
export type WsRoomType =
  | `workspace:${string}`
  | `project:${string}`
  | `agent:${string}`
  | `cli:${string}`
  | `chat:${string}`;
