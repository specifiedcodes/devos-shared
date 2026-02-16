/**
 * BullMQ queue names used across services.
 * Must match between devos-api and devos-orchestrator.
 */
export const QUEUE_NAMES = {
  /** Agent task execution queue */
  AGENT_TASKS: 'agent-tasks',
  /** CLI session processing queue */
  CLI_SESSIONS: 'cli-sessions',
  /** Notification dispatch queue */
  NOTIFICATIONS: 'notifications',
  /** Email sending queue */
  EMAIL: 'email',
  /** File processing queue */
  FILE_PROCESSING: 'file-processing',
  /** Analytics event processing */
  ANALYTICS: 'analytics',
  /** Memory ingestion pipeline */
  MEMORY_INGESTION: 'memory-ingestion',
  /** Memory summarization */
  MEMORY_SUMMARIZATION: 'memory-summarization',
  /** Memory lifecycle (prune/archive) */
  MEMORY_LIFECYCLE: 'memory-lifecycle',
  /** Cost aggregation */
  COST_AGGREGATION: 'cost-aggregation',
  /** Deployment monitoring */
  DEPLOYMENT_MONITORING: 'deployment-monitoring',
} as const;

export type QueueName = typeof QUEUE_NAMES[keyof typeof QUEUE_NAMES];
