import { featuredServices } from "./mock-data/services";
import { recommendedJobs } from "./mock-data/jobs";
import { popularProjects } from "./mock-data/projects";
import { featuredTestimonials } from "./mock-data/testimonials";
import { ENDPOINTS } from "./endpoints";

const mockData: Record<string, unknown> = {
  [ENDPOINTS.SERVICES_FEATURED]: featuredServices,
  [ENDPOINTS.JOBS_RECOMMENDED]: recommendedJobs,
  [ENDPOINTS.PROJECTS_POPULAR]: popularProjects,
  [ENDPOINTS.TESTIMONIALS_FEATURED]: featuredTestimonials,
};

export const mockClient = {
  get: <T>(endpoint: string): Promise<T> => {
    const data = mockData[endpoint];
    if (data === undefined) {
      return Promise.reject(new Error(`No mock data for ${endpoint}`));
    }
    return Promise.resolve(data as T);
  },
  post: <T>(_endpoint: string, _body: unknown): Promise<T> => {
    return Promise.reject(new Error("POST not implemented in mock mode"));
  },
};
