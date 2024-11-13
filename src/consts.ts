import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Thomas McDonald",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "githubs",
    HREF: "https://github.com/ThomasMcDonald",
  },
  {
    NAME: "linkedin",
    HREF: "linkedin.com/in/mcdthomas",
  },
];
