/** Standard API response wrapper */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/** Paginated response wrapper */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/** JWT payload decoded from access token */
export interface JwtPayload {
  user_id: string;
  email: string;
  workspace_id?: string;
  iat: number;
  exp: number;
}

/** Standard error response */
export interface ApiErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
}
