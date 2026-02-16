/** Integration provider type */
export enum IntegrationProvider {
  GITHUB = 'github',
  RAILWAY = 'railway',
  VERCEL = 'vercel',
  SUPABASE = 'supabase',
}

/** Integration connection status */
export enum IntegrationStatus {
  ACTIVE = 'active',
  DISCONNECTED = 'disconnected',
  EXPIRED = 'expired',
  ERROR = 'error',
}
