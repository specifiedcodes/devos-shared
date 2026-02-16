/** POST /api/sprints */
export interface CreateSprintRequest {
  projectId: string;
  name: string;
  goal?: string;
  startDate?: string;
  endDate?: string;
  capacity?: number;
}

/** PATCH /api/sprints/:id */
export interface UpdateSprintRequest {
  name?: string;
  goal?: string;
  startDate?: string;
  endDate?: string;
  capacity?: number;
  status?: string;
}
