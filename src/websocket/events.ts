/**
 * WebSocket event names for client-server communication.
 * These MUST match the event names used in both the backend gateway
 * and frontend socket.io client.
 */

/** Security-related WebSocket events (Story 15.7) */
export const WS_EVENTS = {
  /** Client requests to join a room */
  JOIN: 'join',
  /** Client requests to leave a room */
  LEAVE: 'leave',
  /** Server confirms room join */
  ROOM_JOINED: 'room:joined',
  /** Client requests token refresh */
  AUTH_REFRESH: 'auth:refresh',
  /** Server confirms token refreshed */
  AUTH_REFRESHED: 'auth:refreshed',
  /** Server notifies token refresh failed */
  AUTH_REFRESH_FAILED: 'auth:refresh_failed',
  /** Server warns token is expiring */
  AUTH_EXPIRING: 'auth:expiring',
  /** Server warns client is approaching rate limit */
  RATE_LIMIT_WARNING: 'rate_limit:warning',
  /** Server notifies rate limit exceeded */
  RATE_LIMIT_EXCEEDED: 'rate_limit:exceeded',
  /** Server notifies client is banned */
  RATE_LIMIT_BANNED: 'rate_limit:banned',
  /** Server starts replaying missed events */
  RECONNECTION_REPLAY_START: 'reconnection:replay_start',
  /** Server finishes replaying missed events */
  RECONNECTION_REPLAY_END: 'reconnection:replay_end',
  /** Generic error event */
  ERROR: 'error',
} as const;

/** Kanban real-time events (Story 7.2) */
export const KANBAN_EVENTS = {
  /** Story moved to new column */
  STORY_MOVED: 'kanban:story_moved',
  /** Story created */
  STORY_CREATED: 'kanban:story_created',
  /** Story updated */
  STORY_UPDATED: 'kanban:story_updated',
  /** Story deleted */
  STORY_DELETED: 'kanban:story_deleted',
  /** Board full refresh needed */
  BOARD_REFRESH: 'kanban:board_refresh',
} as const;

/** CLI output streaming events (Story 8.2) */
export const CLI_EVENTS = {
  /** New CLI output line */
  OUTPUT: 'cli:output',
  /** CLI session started */
  SESSION_STARTED: 'cli:session_started',
  /** CLI session ended */
  SESSION_ENDED: 'cli:session_ended',
  /** CLI session error */
  SESSION_ERROR: 'cli:session_error',
} as const;

/** Chat message events (Story 9.2) */
export const CHAT_EVENTS = {
  /** New message received */
  MESSAGE: 'chat:message',
  /** Message status updated (delivered/read) */
  MESSAGE_STATUS: 'chat:message_status',
  /** Typing indicator */
  TYPING: 'chat:typing',
  /** Agent status update in chat */
  AGENT_STATUS: 'chat:agent_status',
} as const;

/** Agent status events (Story 9.3) */
export const AGENT_EVENTS = {
  /** Agent status changed */
  STATUS_CHANGED: 'agent:status_changed',
  /** Agent activity updated */
  ACTIVITY_UPDATED: 'agent:activity_updated',
  /** Agent task progress */
  TASK_PROGRESS: 'agent:task_progress',
  /** Agent error occurred */
  ERROR: 'agent:error',
} as const;

/** Notification events (Story 10.4) */
export const NOTIFICATION_EVENTS = {
  /** New notification */
  NEW: 'notification:new',
  /** Notification read */
  READ: 'notification:read',
  /** Notification count updated */
  COUNT_UPDATED: 'notification:count_updated',
} as const;

/** Cost/usage events (Story 3.3) */
export const COST_EVENTS = {
  /** Cost update for workspace */
  COST_UPDATE: 'cost:update',
  /** Spending limit warning */
  LIMIT_WARNING: 'cost:limit_warning',
  /** Spending limit exceeded */
  LIMIT_EXCEEDED: 'cost:limit_exceeded',
} as const;

/** Deployment events (Story 6.8) */
export const DEPLOYMENT_EVENTS = {
  /** Deployment status changed */
  STATUS_CHANGED: 'deployment:status_changed',
  /** Deployment approval requested */
  APPROVAL_REQUESTED: 'deployment:approval_requested',
  /** Deployment completed */
  COMPLETED: 'deployment:completed',
  /** Deployment failed */
  FAILED: 'deployment:failed',
} as const;
