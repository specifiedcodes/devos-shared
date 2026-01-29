// User types
export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  last_login_at?: string;
  two_factor_enabled: boolean;
}

// Workspace types
export interface Workspace {
  id: string;
  name: string;
  owner_user_id: string;
  schema_name: string;
  created_at: string;
  updated_at: string;
}

// Project types
export interface Project {
  id: string;
  workspace_id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// JWT Payload types
export interface JwtPayload {
  user_id: string;
  email: string;
  workspace_id?: string;
  iat: number;
  exp: number;
}
