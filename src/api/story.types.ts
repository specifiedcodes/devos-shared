/** POST /api/stories */
export interface CreateStoryRequest {
  title: string;
  description?: string;
  projectId: string;
  epicId?: string;
  priority?: string;
  storyPoints?: number;
  tags?: string[];
  sprintId?: string;
}

/** PATCH /api/stories/:id */
export interface UpdateStoryRequest {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  storyPoints?: number;
  position?: number;
  tags?: string[];
  sprintId?: string;
  assignedAgentId?: string;
}

/** Kanban board response */
export interface KanbanBoardResponse {
  columns: KanbanColumn[];
  stories: KanbanStoryItem[];
}

/** Kanban column definition */
export interface KanbanColumn {
  id: string;
  title: string;
  status: string;
  storyCount: number;
  totalPoints: number;
}

/** Kanban story card */
export interface KanbanStoryItem {
  id: string;
  storyKey: string;
  title: string;
  status: string;
  priority: string;
  storyPoints?: number;
  assignedAgentId?: string;
  assignedAgentName?: string;
  assignedAgentType?: string;
  tags?: string[];
  position: number;
}
