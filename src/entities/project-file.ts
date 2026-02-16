/**
 * Project file entity interface
 * Maps to: devos-api/src/database/entities/project-file.entity.ts
 */
export interface IProjectFile {
  id: string;
  projectId: string;
  workspaceId: string;
  filename: string;
  path: string;
  mimeType: string;
  sizeBytes: number;
  storageKey: string;
  description?: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
