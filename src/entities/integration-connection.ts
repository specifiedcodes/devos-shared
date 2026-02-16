import type { IntegrationProvider, IntegrationStatus } from '../enums/integration.enums.js';

/**
 * Integration connection entity interface
 * Maps to: devos-api/src/database/entities/integration-connection.entity.ts
 */
export interface IIntegrationConnection {
  id: string;
  workspaceId: string;
  userId: string;
  provider: IntegrationProvider;
  status: IntegrationStatus;
  scopes?: string;
  externalUserId?: string;
  externalUsername?: string;
  externalAvatarUrl?: string;
  metadata?: Record<string, unknown>;
  connectedAt: string;
  lastUsedAt?: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}
