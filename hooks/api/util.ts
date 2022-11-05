export type ApiResponse<T = unknown> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};
