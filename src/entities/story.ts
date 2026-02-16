import type { StoryStatus, StoryPriority } from '../enums/story.enums.js';

/**
 * Story entity interface
 * Maps to: devos-api/src/database/entities/story.entity.ts
 */
export interface IStory {
  id: string;
  projectId: string;
  epicId?: string;
  storyKey: string;
  title: string;
  description?: string;
  status: StoryStatus;
  priority: StoryPriority;
  storyPoints?: number;
  position: number;
  tags?: string[];
  sprintId?: string;
  assignedAgentId?: string;
  createdAt: string;
  updatedAt: string;
}
