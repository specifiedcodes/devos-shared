/** Agent type (role-based) */
export enum AgentType {
  DEV = 'dev',
  PLANNER = 'planner',
  QA = 'qa',
  DEVOPS = 'devops',
  ORCHESTRATOR = 'orchestrator',
}

/** Agent lifecycle status */
export enum AgentStatus {
  CREATED = 'created',
  INITIALIZING = 'initializing',
  RUNNING = 'running',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  FAILED = 'failed',
  TERMINATED = 'terminated',
}

/** Fine-grained agent activity status (Story 9.3) */
export enum AgentActivityStatus {
  CREATED = 'created',
  INITIALIZING = 'initializing',
  RUNNING = 'running',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  FAILED = 'failed',
  TERMINATED = 'terminated',
  IDLE = 'idle',
  THINKING = 'thinking',
  CODING = 'coding',
  TESTING = 'testing',
  REVIEWING = 'reviewing',
  DEBUGGING = 'debugging',
  COMMITTING = 'committing',
  DEPLOYING = 'deploying',
  WAITING_INPUT = 'waiting_input',
  RECOVERING = 'recovering',
  ERROR = 'error',
}

/** Agent status update category for filtering */
export enum StatusUpdateCategory {
  TASK_LIFECYCLE = 'task_lifecycle',
  PROGRESS = 'progress',
  ERROR = 'error',
  WAITING = 'waiting',
}
