import type { DeploymentApprovalStatus } from '../enums/deployment.enums.js';

/**
 * Deployment approval entity interface
 * Maps to: devos-api/src/database/entities/deployment-approval.entity.ts
 */
export interface IDeploymentApproval {
  id: string;
  projectId: string;
  workspaceId: string;
  platform: string;
  branch: string;
  commitSha?: string;
  environment: string;
  status: DeploymentApprovalStatus;
  storyId?: string;
  storyTitle?: string;
  changes?: string[];
  testResults?: { passed: number; failed: number; skipped?: number };
  requestedBy: string;
  reviewedBy?: string;
  rejectionReason?: string;
  requestedAt: string;
  reviewedAt?: string;
}
