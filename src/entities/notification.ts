/**
 * Notification entity interface
 * Maps to: devos-api/src/database/entities/notification.entity.ts
 */
export interface INotification {
  id: string;
  workspaceId: string;
  userId?: string;
  type: string;
  title: string;
  message: string;
  metadata?: Record<string, unknown>;
  readAt?: string;
  createdAt: string;
}
