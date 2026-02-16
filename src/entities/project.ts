import type { ProjectStatus } from '../enums/project.enums.js';

/**
 * Project entity interface
 * Maps to: devos-api/src/database/entities/project.entity.ts
 */
export interface IProject {
  id: string;
  name: string;
  description?: string;
  templateId?: string;
  githubRepoUrl?: string;
  deploymentUrl?: string;
  railwayProjectId?: string;
  vercelProjectId?: string;
  supabaseProjectRef?: string;
  workspaceId: string;
  createdByUserId: string;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
