import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/home.service";

export function useFeaturedServices() {
  return useQuery({
    queryKey: ["services", "featured"],
    queryFn: homeService.getFeaturedServices,
  });
}
