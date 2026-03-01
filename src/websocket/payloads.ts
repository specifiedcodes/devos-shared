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

// ============================================================
// Railway Deployment Streaming Payloads (Epic 25)
// ============================================================

/** Deployment status enum for deployment streaming events */
export type DeploymentStreamingStatus =
  | 'queued'
  | 'building'
  | 'deploying'
  | 'success'
  | 'failed'
  | 'crashed'
  | 'cancelled'
  | 'rolled_back';

/** Railway service type */
export type RailwayServiceTypeShared =
  | 'web'
  | 'api'
  | 'worker'
  | 'database'
  | 'cache'
  | 'cron';

/** Base deployment event - all events include workspaceId for routing */
export interface DeploymentEventBase {
  workspaceId: string;
  projectId: string;
  timestamp: string;
}

/** Emitted when a deployment starts (bulk or single) */
export interface DeploymentStartedPayload extends DeploymentEventBase {
  deploymentId: string;
  services: Array<{
    serviceId: string;
    serviceName: string;
    serviceType: RailwayServiceTypeShared;
  }>;
  triggeredBy: string;
  environment: string;
}

/** Emitted on per-service status change */
export interface DeploymentStatusStreamPayload extends DeploymentEventBase {
  serviceId: string;
  serviceName: string;
  status: DeploymentStreamingStatus;
  deploymentUrl?: string;
  error?: string;
  progress?: number;
}

/** Emitted when entire deployment completes */
export interface DeploymentCompletedPayload extends DeploymentEventBase {
  deploymentId: string;
  status: 'success' | 'partial_failure' | 'failed';
  services: Array<{
    serviceId: string;
    serviceName: string;
    status: DeploymentStreamingStatus;
    deploymentUrl?: string;
    buildDurationSeconds?: number;
    deployDurationSeconds?: number;
  }>;
  totalDurationSeconds: number;
}

/** Emitted per log line from Railway CLI */
export interface DeploymentLogPayload extends DeploymentEventBase {
  serviceId: string;
  serviceName: string;
  line: string;
  stream: 'stdout' | 'stderr';
  logType: 'build' | 'deploy' | 'runtime';
  sequence: number;
}

/** Emitted when environment variables change (names only, never values) */
export interface DeploymentEnvChangedPayload extends DeploymentEventBase {
  serviceId: string;
  serviceName: string;
  action: 'set' | 'delete' | 'bulk_update';
  variableNames: string[];
  autoRedeploy: boolean;
}

/** Emitted when a service is provisioned */
export interface DeploymentServiceProvisionedPayload extends DeploymentEventBase {
  serviceId: string;
  serviceName: string;
  serviceType: RailwayServiceTypeShared;
  status: 'provisioning' | 'active' | 'failed';
}

/** Emitted when a domain is added, removed, or verified */
export interface DeploymentDomainUpdatedPayload extends DeploymentEventBase {
  serviceId: string;
  serviceName: string;
  domain: string;
  action: 'added' | 'removed' | 'verified';
  status: 'active' | 'pending_dns' | 'pending_ssl' | 'error';
}

/** Union type for all deployment streaming events */
export type DeploymentStreamingEvent =
  | { type: 'deployment:started'; payload: DeploymentStartedPayload }
  | { type: 'deployment:status'; payload: DeploymentStatusStreamPayload }
  | { type: 'deployment:completed'; payload: DeploymentCompletedPayload }
  | { type: 'deployment:log'; payload: DeploymentLogPayload }
  | { type: 'deployment:env_changed'; payload: DeploymentEnvChangedPayload }
  | { type: 'deployment:service_provisioned'; payload: DeploymentServiceProvisionedPayload }
  | { type: 'deployment:domain_updated'; payload: DeploymentDomainUpdatedPayload };

/** Room format for WebSocket subscriptions */
export type WsRoomType =
  | `workspace:${string}`
  | `project:${string}`
  | `agent:${string}`
  | `cli:${string}`
  | `chat:${string}`
  | `deployment:${string}`;
