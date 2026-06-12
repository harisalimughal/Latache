import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/home.service";

export function usePopularProjects() {
  return useQuery({
    queryKey: ["projects", "popular"],
    queryFn: homeService.getPopularProjects,
  });
}
