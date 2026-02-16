/**
 * User entity interface
 * Maps to: devos-api/src/database/entities/user.entity.ts
 */
export interface IUser {
  id: string;
  email: string;
  twoFactorEnabled: boolean;
  isPlatformAdmin: boolean;
  currentWorkspaceId: string | null;
  suspendedAt: string | null;
  suspensionReason: string | null;
  deletedAt: string | null;
  lastLoginAt: string | null;
  createdAt: string;
  updatedAt: string;
}
