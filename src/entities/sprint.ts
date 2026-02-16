import type { SprintStatus } from '../enums/sprint.enums.js';

/**
 * Sprint entity interface
 * Maps to: devos-api/src/database/entities/sprint.entity.ts
 */
export interface ISprint {
  id: string;
  projectId: string;
  sprintNumber: number;
  name: string;
  goal?: string;
  startDate?: string;
  endDate?: string;
  capacity?: number;
  status: SprintStatus;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}
