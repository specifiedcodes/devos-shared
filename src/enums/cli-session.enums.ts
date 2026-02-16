/** CLI session completion status */
export enum CliSessionStatus {
  COMPLETED = 'completed',
  FAILED = 'failed',
  TERMINATED = 'terminated',
}

/** CLI session agent type (extended set) */
export enum CliSessionAgentType {
  DEV = 'dev',
  QA = 'qa',
  DEVOPS = 'devops',
  PLANNER = 'planner',
  SECURITY = 'security',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  PERFORMANCE = 'performance',
}
