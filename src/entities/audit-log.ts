/**
 * Audit log entity interface
 * Maps to: devos-api/src/database/entities/audit-log.entity.ts
 */
export interface IAuditLog {
  id: string;
  workspaceId: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}
