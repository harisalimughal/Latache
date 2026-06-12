import { cn } from "@/lib/utils";

interface Props {
  rating: number;
  max?: number;
  className?: string;
}

export function StarRating({ rating, max = 5, className }: Props) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src="/icons/star.svg"
          alt=""
          width={19}
          height={19}
          className={cn("shrink-0", i >= rating && "opacity-25")}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
