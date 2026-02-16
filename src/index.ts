/**
 * @devos/shared - Shared TypeScript types and contracts for DevOS platform
 *
 * This package provides the single source of truth for:
 * - Entity interfaces (IUser, IWorkspace, IProject, etc.)
 * - Enum types (StoryStatus, AgentType, WorkspaceRole, etc.)
 * - API contract types (request/response DTOs)
 * - WebSocket event names and payload types
 * - Platform constants (queue names, error codes, limits)
 * - Utility functions and type guards
 */

// Entity interfaces
export type {
  IUser,
  IWorkspace,
  IWorkspaceMember,
  IProject,
  IStory,
  ISprint,
  IAgent,
  ICliSession,
  IChatMessage,
  INotification,
  IAuditLog,
  IApiUsage,
  IProjectFile,
  IIntegrationConnection,
  IDeploymentApproval,
  IDeploymentRollback,
  IBYOKKey,
} from './entities/index.js';

// Enum types
export {
  WorkspaceRole,
  ProjectStatus,
  StoryStatus,
  StoryPriority,
  SprintStatus,
  AgentType,
  AgentStatus,
  AgentActivityStatus,
  StatusUpdateCategory,
  ChatSenderType,
  ChatMessageStatus,
  CliSessionStatus,
  CliSessionAgentType,
  IntegrationProvider,
  IntegrationStatus,
  DeploymentApprovalStatus,
  DeploymentRollbackStatus,
  DeploymentRollbackTriggerType,
  ApiProvider,
  KeyProvider,
} from './enums/index.js';

// API contract types
export type {
  ApiResponse,
  PaginatedResponse,
  JwtPayload,
  ApiErrorResponse,
  RegisterRequest,
  LoginRequest,
  AuthResponse,
  LoginResponse,
  RefreshTokenRequest,
  CreateWorkspaceRequest,
  RenameWorkspaceRequest,
  WorkspaceMemberResponse,
  CreateInvitationRequest,
  CreateProjectRequest,
  UpdateProjectRequest,
  ProjectResponse,
  CreateAgentRequest,
  UpdateAgentRequest,
  ListAgentsQuery,
  AgentStatusUpdateResponse,
  CreateStoryRequest,
  UpdateStoryRequest,
  KanbanBoardResponse,
  KanbanColumn,
  KanbanStoryItem,
  CreateSprintRequest,
  UpdateSprintRequest,
  FileUploadResponse,
  FileListQuery,
  FileListItem,
  AnalyticsResponse,
  VelocityData,
  VelocityDataPoint,
  BurndownData,
  BurndownDataPoint,
  ThroughputData,
  ThroughputDataPoint,
  CycleTimeData,
  CycleTimeDistribution,
  LeadTimeData,
  LeadTimeTrendPoint,
  AgentUtilizationData,
  AgentUtilizationEntry,
  CumulativeFlowData,
  CumulativeFlowDataPoint,
  HeatmapData,
  HeatmapCell,
  AgentHeatmapSummary,
  NotificationListQuery,
  UpdateNotificationPreferencesRequest,
  PushSubscriptionRequest,
  CostDashboardSummary,
  ProviderCostBreakdown,
  ProjectCostBreakdown,
  DailyCostPoint,
  SetSpendingLimitRequest,
} from './api/index.js';

// WebSocket events and payloads
export {
  WS_EVENTS,
  KANBAN_EVENTS,
  CLI_EVENTS,
  CHAT_EVENTS,
  AGENT_EVENTS,
  NOTIFICATION_EVENTS,
  COST_EVENTS,
  DEPLOYMENT_EVENTS,
} from './websocket/index.js';

export type {
  KanbanStoryMovedPayload,
  KanbanStoryCreatedPayload,
  CliOutputPayload,
  CliSessionEventPayload,
  ChatMessagePayload,
  AgentStatusChangedPayload,
  NotificationPayload,
  CostUpdatePayload,
  DeploymentStatusPayload,
  WsRoomType,
} from './websocket/index.js';

// Constants
export { QUEUE_NAMES, ERROR_CODES, LIMITS } from './constants/index.js';
export type { QueueName, ErrorCode } from './constants/index.js';

// Utility types and functions
export {
  isAgentType,
  isAgentStatus,
  isAgentActivityStatus,
  isStoryStatus,
  isStoryPriority,
  isWorkspaceRole,
  isProjectStatus,
  isSprintStatus,
  isUUID,
  isNonEmptyString,
  isISODateString,
  safeParseNumber,
  safeDivide,
  clamp,
  truncate,
  formatBytes,
  formatCostUsd,
  wsRoom,
  parseWsRoom,
} from './utils/index.js';

// Legacy compatibility: re-export original types with deprecated notice
// These map to the new I-prefixed interfaces for backward compatibility
/** @deprecated Use IUser instead */
export type { IUser as User } from './entities/user.js';
/** @deprecated Use IWorkspace instead */
export type { IWorkspace as Workspace } from './entities/workspace.js';
/** @deprecated Use IProject instead */
export type { IProject as Project } from './entities/project.js';
