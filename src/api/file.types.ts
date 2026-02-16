/** File upload response */
export interface FileUploadResponse {
  id: string;
  filename: string;
  path: string;
  size: number;
  mimeType: string;
  uploadedBy: string;
  uploadedAt: string;
  downloadUrl: string;
}

/** File list query parameters */
export interface FileListQuery {
  path?: string;
  page?: number;
  limit?: number;
  search?: string;
  mimeType?: string;
}

/** File list item */
export interface FileListItem {
  id: string;
  filename: string;
  path: string;
  mimeType: string;
  sizeBytes: number;
  description?: string;
  uploadedBy: string;
  createdAt: string;
  downloadUrl?: string;
}
