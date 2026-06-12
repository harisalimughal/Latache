import { apiClient } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import type { Service } from "../types/service.types";
import type { RecommendedJob } from "../types/job.types";
import type { PopularProject } from "../types/public-home.types";
import type { Testimonial } from "../types/testimonial.types";

export const homeService = {
  getFeaturedServices: (): Promise<Service[]> =>
    apiClient.get<Service[]>(ENDPOINTS.SERVICES_FEATURED),

  getRecommendedJobs: (): Promise<RecommendedJob[]> =>
    apiClient.get<RecommendedJob[]>(ENDPOINTS.JOBS_RECOMMENDED),

  getPopularProjects: (): Promise<PopularProject[]> =>
    apiClient.get<PopularProject[]>(ENDPOINTS.PROJECTS_POPULAR),

  getFeaturedTestimonials: (): Promise<Testimonial[]> =>
    apiClient.get<Testimonial[]>(ENDPOINTS.TESTIMONIALS_FEATURED),
};
