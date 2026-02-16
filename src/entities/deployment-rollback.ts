import type { DeploymentRollbackStatus, DeploymentRollbackTriggerType } from '../enums/deployment.enums.js';

/**
 * Deployment rollback entity interface
 * Maps to: devos-api/src/database/entities/deployment-rollback.entity.ts
 */
export interface IDeploymentRollback {
  id: string;
  projectId: string;
  workspaceId: string;
  platform: string;
  deploymentId: string;
  targetDeploymentId?: string;
  newDeploymentId?: string;
  environment: string;
  status: DeploymentRollbackStatus;
  reason?: string;
  triggerType: DeploymentRollbackTriggerType;
  initiatedBy: string;
  errorMessage?: string;
  initiatedAt: string;
  completedAt?: string;
}
