/** POST /api/auth/register */
export interface RegisterRequest {
  email: string;
  password: string;
}

/** POST /api/auth/login */
export interface LoginRequest {
  email: string;
  password: string;
  twoFactorCode?: string;
}

/** Auth response (login/register) */
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
    twoFactorEnabled: boolean;
  };
}

/** Login response (may require 2FA) */
export interface LoginResponse {
  access_token?: string;
  refresh_token?: string;
  requires2FA?: boolean;
  tempToken?: string;
  user?: {
    id: string;
    email: string;
    twoFactorEnabled: boolean;
  };
}

/** POST /api/auth/refresh */
export interface RefreshTokenRequest {
  refresh_token: string;
}
