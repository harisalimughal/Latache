import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/home.service";

export function useRecommendedJobs() {
  return useQuery({
    queryKey: ["jobs", "recommended"],
    queryFn: homeService.getRecommendedJobs,
  });
}
