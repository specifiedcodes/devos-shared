/** POST /api/projects */
export interface CreateProjectRequest {
  name: string;
  description?: string;
  templateId?: string;
  workspaceId: string;
}

/** PATCH /api/projects/:id */
export interface UpdateProjectRequest {
  name?: string;
  description?: string;
  status?: string;
}

/** Project response with preferences */
export interface ProjectResponse {
  id: string;
  name: string;
  description?: string;
  status: string;
  workspaceId: string;
  createdByUserId: string;
  githubRepoUrl?: string;
  deploymentUrl?: string;
  createdAt: string;
  updatedAt: string;
}
