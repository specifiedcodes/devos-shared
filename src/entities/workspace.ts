/**
 * Workspace entity interface
 * Maps to: devos-api/src/database/entities/workspace.entity.ts
 */
export interface IWorkspace {
  id: string;
  name: string;
  description?: string;
  ownerUserId: string;
  schemaName: string;
  lastAccessedAt?: string;
  isFavorite: boolean;
  type?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
