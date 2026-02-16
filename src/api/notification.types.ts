/** Notification list query parameters */
export interface NotificationListQuery {
  page?: number;
  limit?: number;
  unreadOnly?: boolean;
}

/** Notification preferences update */
export interface UpdateNotificationPreferencesRequest {
  emailEnabled?: boolean;
  pushEnabled?: boolean;
  slackEnabled?: boolean;
  discordEnabled?: boolean;
  quietHoursStart?: string;
  quietHoursEnd?: string;
}

/** Push subscription registration */
export interface PushSubscriptionRequest {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}
