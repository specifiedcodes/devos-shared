import type { WorkspaceRole } from '../enums/workspace.enums.js';

/**
 * Workspace member entity interface
 * Maps to: devos-api/src/database/entities/workspace-member.entity.ts
 */
export interface IWorkspaceMember {
  id: string;
  workspaceId: string;
  userId: string;
  role: WorkspaceRole;
  createdAt: string;
}
