import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/home.service";

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials", "featured"],
    queryFn: homeService.getFeaturedTestimonials,
  });
}
