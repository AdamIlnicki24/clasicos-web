export interface ApiError extends Error {
  response: { data: { statusCode: number; message: string } };
}
