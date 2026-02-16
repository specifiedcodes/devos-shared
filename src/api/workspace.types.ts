/** POST /api/workspaces */
export interface CreateWorkspaceRequest {
  name: string;
  description?: string;
  type?: string;
  tags?: string[];
}

/** PATCH /api/workspaces/:id */
export interface RenameWorkspaceRequest {
  name: string;
}

/** Workspace member with user info */
export interface WorkspaceMemberResponse {
  id: string;
  userId: string;
  email: string;
  role: string;
  createdAt: string;
}

/** POST /api/workspaces/:id/invitations */
export interface CreateInvitationRequest {
  email: string;
  role: string;
}
