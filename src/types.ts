export interface User {
  roles: string[];
}

export interface AuthProps {
  currentUser?: User | null;
}