type AuthErrors<T> = Partial<{
  [key in keyof T]: string[];
}>;

export interface AuthState {
  accessToken: string | null;
  currentUser: any | null;
  error: AuthErrors<Partial<Error>> | null | string;
  loading: boolean;
}
