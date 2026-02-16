/**
 * Runtime type guards for validating data shapes.
 * Useful for validating WebSocket payloads, API responses, etc.
 */

import { AgentType, AgentStatus, AgentActivityStatus } from '../enums/agent.enums.js';
import { StoryStatus, StoryPriority } from '../enums/story.enums.js';
import { WorkspaceRole } from '../enums/workspace.enums.js';
import { ProjectStatus } from '../enums/project.enums.js';
import { SprintStatus } from '../enums/sprint.enums.js';

/** Check if a value is a valid AgentType */
export function isAgentType(value: unknown): value is AgentType {
  return typeof value === 'string' && Object.values(AgentType).includes(value as AgentType);
}

/** Check if a value is a valid AgentStatus */
export function isAgentStatus(value: unknown): value is AgentStatus {
  return typeof value === 'string' && Object.values(AgentStatus).includes(value as AgentStatus);
}

/** Check if a value is a valid AgentActivityStatus */
export function isAgentActivityStatus(value: unknown): value is AgentActivityStatus {
  return typeof value === 'string' && Object.values(AgentActivityStatus).includes(value as AgentActivityStatus);
}

/** Check if a value is a valid StoryStatus */
export function isStoryStatus(value: unknown): value is StoryStatus {
  return typeof value === 'string' && Object.values(StoryStatus).includes(value as StoryStatus);
}

/** Check if a value is a valid StoryPriority */
export function isStoryPriority(value: unknown): value is StoryPriority {
  return typeof value === 'string' && Object.values(StoryPriority).includes(value as StoryPriority);
}

/** Check if a value is a valid WorkspaceRole */
export function isWorkspaceRole(value: unknown): value is WorkspaceRole {
  return typeof value === 'string' && Object.values(WorkspaceRole).includes(value as WorkspaceRole);
}

/** Check if a value is a valid ProjectStatus */
export function isProjectStatus(value: unknown): value is ProjectStatus {
  return typeof value === 'string' && Object.values(ProjectStatus).includes(value as ProjectStatus);
}

/** Check if a value is a valid SprintStatus */
export function isSprintStatus(value: unknown): value is SprintStatus {
  return typeof value === 'string' && Object.values(SprintStatus).includes(value as SprintStatus);
}

/** Check if a value is a valid UUID v4 */
export function isUUID(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

/** Check if a value is a non-empty string */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/** Check if a value is a valid ISO 8601 date string */
export function isISODateString(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  // Require YYYY-MM-DDTHH:mm pattern at minimum to avoid false positives
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(value)) return false;
  const date = new Date(value);
  return !isNaN(date.getTime());
}
