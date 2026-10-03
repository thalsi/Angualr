export interface User {
  id: number;
  name: string;
  address: string;
  email: string;
  mobile: string;
}

export interface UserRequest {
  name: string;
  address: string;
  email: string;
  mobile: string;
}

export interface UserListResponse {
  data: User[];
  total: number;
  page: number;
  limit: number;
}