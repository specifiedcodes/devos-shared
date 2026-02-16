/** Deployment approval status */
export enum DeploymentApprovalStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

/** Deployment rollback status */
export enum DeploymentRollbackStatus {
  IN_PROGRESS = 'in_progress',
  SUCCESS = 'success',
  FAILED = 'failed',
}

/** Deployment rollback trigger type */
export enum DeploymentRollbackTriggerType {
  MANUAL = 'manual',
  AUTOMATIC = 'automatic',
}
