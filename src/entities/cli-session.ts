import type { CliSessionAgentType, CliSessionStatus } from '../enums/cli-session.enums.js';

/**
 * CLI session entity interface
 * Maps to: devos-api/src/database/entities/cli-session.entity.ts
 */
export interface ICliSession {
  id: string;
  agentId: string;
  workspaceId: string;
  projectId: string | null;
  storyKey: string | null;
  agentType: CliSessionAgentType;
  lineCount: number;
  outputSizeBytes: number;
  status: CliSessionStatus;
  startedAt: string;
  endedAt: string | null;
  durationSeconds: number | null;
  storageKey: string | null;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
