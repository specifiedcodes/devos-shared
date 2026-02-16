import type { ApiProvider } from '../enums/provider.enums.js';

/**
 * API usage entity interface
 * Maps to: devos-api/src/database/entities/api-usage.entity.ts
 */
export interface IApiUsage {
  id: string;
  workspaceId: string;
  projectId: string | null;
  agentId: string | null;
  byokKeyId: string | null;
  provider: ApiProvider;
  model: string;
  inputTokens: number;
  outputTokens: number;
  costUsd: number;
  cachedTokens: number;
  taskType: string | null;
  routingReason: string | null;
  createdAt: string;
}
