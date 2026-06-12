import { mockClient } from "./mock-client";
import { realClient } from "./real-client";

export const apiClient =
  process.env.NEXT_PUBLIC_API_MODE === "mock" ? mockClient : realClient;
