/**
 * Platform-wide limits and defaults.
 * Used for validation across frontend and backend.
 */
export const LIMITS = {
  /** Maximum file upload size in bytes (100MB) */
  MAX_FILE_SIZE_BYTES: 100 * 1024 * 1024,

  /** Maximum workspace name length */
  MAX_WORKSPACE_NAME_LENGTH: 255,

  /** Maximum project name length */
  MAX_PROJECT_NAME_LENGTH: 100,

  /** Maximum story title length */
  MAX_STORY_TITLE_LENGTH: 255,

  /** Maximum story description length */
  MAX_STORY_DESCRIPTION_LENGTH: 10000,

  /** Maximum members per workspace */
  MAX_WORKSPACE_MEMBERS: 100,

  /** Maximum projects per workspace */
  MAX_PROJECTS_PER_WORKSPACE: 50,

  /** Maximum agents per project */
  MAX_AGENTS_PER_PROJECT: 10,

  /** Maximum BYOK keys per workspace */
  MAX_BYOK_KEYS_PER_WORKSPACE: 20,

  /** Default pagination page size */
  DEFAULT_PAGE_SIZE: 20,

  /** Maximum pagination page size */
  MAX_PAGE_SIZE: 100,

  /** Default signed URL expiry (seconds) */
  DEFAULT_SIGNED_URL_EXPIRY: 3600,

  /** Maximum CLI session size (bytes, 50MB) */
  MAX_CLI_SESSION_SIZE_BYTES: 50 * 1024 * 1024,

  /** Maximum chat message length */
  MAX_CHAT_MESSAGE_LENGTH: 10000,

  /** Maximum notification batch size */
  MAX_NOTIFICATION_BATCH_SIZE: 50,

  /** Maximum analytics events per batch */
  MAX_ANALYTICS_EVENTS_PER_BATCH: 50,

  /** Maximum sprint count for velocity query */
  MAX_VELOCITY_SPRINT_COUNT: 50,

  /** Maximum date range for analytics (days) */
  MAX_ANALYTICS_DATE_RANGE_DAYS: 365,
} as const;
