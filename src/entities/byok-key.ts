import type { KeyProvider } from '../enums/provider.enums.js';

/**
 * BYOK (Bring Your Own Key) entity interface
 * Maps to: devos-api/src/database/entities/byok-key.entity.ts
 */
export interface IBYOKKey {
  id: string;
  workspaceId: string;
  keyName: string;
  provider: KeyProvider;
  keyPrefix?: string;
  keySuffix?: string;
  createdByUserId: string;
  createdAt: string;
  updatedAt: string;
  lastUsedAt?: string;
  isActive: boolean;
}
