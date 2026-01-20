export enum ProjectCategory {
  ASSIGNMENT = "Assignment",
  HOMEWORK = "Homework",
  STUDIOWORK = "Studio Work",
  ALL = "All"
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  galleryImages: string[];
  /** Optional video URLs (e.g. /videos/assigment3.mp4) – shown as playable in project detail */
  videos?: string[];
  description: string;
  tags: string[];
  year: string;
  role: string;
  tools: string[];
  location: string;
}

export type ProjectFilter = ProjectCategory;