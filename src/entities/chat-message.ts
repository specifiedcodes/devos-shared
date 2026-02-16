import type { ChatSenderType, ChatMessageStatus } from '../enums/chat.enums.js';
import type { AgentType } from '../enums/agent.enums.js';

/**
 * Chat message entity interface
 * Maps to: devos-api/src/database/entities/chat-message.entity.ts
 */
export interface IChatMessage {
  id: string;
  workspaceId: string;
  projectId: string | null;
  agentId: string | null;
  userId: string | null;
  senderType: ChatSenderType;
  agentType: AgentType | null;
  text: string;
  isStatusUpdate: boolean;
  metadata: Record<string, unknown> | null;
  status: ChatMessageStatus;
  deliveredAt: string | null;
  readAt: string | null;
  conversationId: string | null;
  isArchived: boolean;
  archivedAt: string | null;
  roomId: string | null;
  createdAt: string;
  updatedAt: string;
}
