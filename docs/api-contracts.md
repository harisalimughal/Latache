# Latache API Contracts

---

## Services

### GET /services/featured

**Purpose:** Fetch the list of featured service categories shown on the public homepage.

**Query params:** none

**Response:**

```ts
type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;      // key matching client-side icon map (e.g. "Zap", "Droplets")
  slug: string;      // URL-safe identifier for routing to /services/:slug
};

type Response = Service[];
```

**Example response:**

```json
[
  { "id": "1", "name": "Electrician", "description": "Wiring, Fixtures and installations", "icon": "Zap", "slug": "electrician" },
  { "id": "2", "name": "Plumbing",    "description": "Leaks, drains and Pipe Repairs",      "icon": "Droplets", "slug": "plumbing" }
]
```

**Mock data location:** `apps/web/lib/api/mock-data/services.ts`

**Used by:** `features/public-home` → `ServicesSection`

---

## Jobs

### GET /jobs/recommended

**Purpose:** Fetch the list of recommended jobs shown in the homepage carousel.

**Query params:** none

**Response:**

```ts
type RecommendedJob = {
  id: string;
  title: string;
  description: string;
  category: string;  // e.g. "Winter Service"
  slug: string;
};

type Response = RecommendedJob[];
```

**Mock data location:** `apps/web/lib/api/mock-data/jobs.ts`

**Used by:** `features/public-home` → `RecommendedJobsSection`

---

## Projects

### GET /projects/popular

**Purpose:** Fetch the list of popular project types shown on the public homepage grid.

**Query params:** none

**Response:**

```ts
type PopularProject = {
  id: string;
  title: string;
  startingPrice: number;
  imageUrl: string;
  slug: string;
};

type Response = PopularProject[];
```

**Example response:**

```json
[
  { "id": "1", "title": "Furniture Assembly", "startingPrice": 50, "imageUrl": "https://...", "slug": "furniture-assembly" },
  { "id": "2", "title": "Mount Art or Shelves", "startingPrice": 50, "imageUrl": "https://...", "slug": "mount-art-or-shelves" }
]
```

**Mock data location:** `apps/web/lib/api/mock-data/projects.ts`

**Used by:** `features/public-home` → `PopularProjectsSection`

---

## Testimonials

### GET /testimonials/featured

**Purpose:** Fetch featured customer testimonials shown on the public homepage.

**Query params:** none

**Response:**

```ts
type Testimonial = {
  id: string;
  rating: number;        // 1–5 star rating
  authorName: string;
  authorAvatar: string;  // URL to reviewer avatar image
  content: string;
  category: string;      // e.g. "Furniture Assembly"
};

type Response = Testimonial[];
```

**Example response:**

```json
[
  {
    "id": "1",
    "rating": 5,
    "authorName": "Elizabeth P.",
    "authorAvatar": "https://...",
    "content": "David did an awesome job assembling crib and dresser for nursery...",
    "category": "Furniture Assembly"
  }
]
```

**Mock data location:** `apps/web/lib/api/mock-data/testimonials.ts`

**Used by:** `features/public-home` → `TestimonialsSection`
