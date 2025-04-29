export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  codesandboxUrl?: string;
}

export interface Demo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  team: string;
  technologies: string[];
  projects: Project[];
} 