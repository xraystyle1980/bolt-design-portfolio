import { Link } from 'react-router-dom';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Tags } from '@/components/Tags';
import ReactPlayer from 'react-player';

interface ProjectSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  codesandboxUrl?: string;
}

export function ProjectSection({
  title,
  description,
  imageUrl,
  videoUrl,
  technologies,
  demoUrl,
  githubUrl,
  codesandboxUrl
}: ProjectSectionProps) {
  console.log('ProjectSection render:', { title, videoUrl, imageUrl });
  
  return (
    <section className="py-20 border-b border-border">
      <div className="container">
        <div className="grid gap-12 items-center lg:grid-cols-[1.2fr,1fr] min-h-[600px]">
          
          {/* Media */}
          <div className="lg:order-1 self-center">
            {videoUrl ? (
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  controls={false}
                  playing={true}
                  muted={true}
                  playsinline={true}
                  loop={true}
                  config={{
                    file: {
                      attributes: {
                        controlsList: 'nodownload'
                      }
                    }
                  }}
                />
              </div>
            ) : imageUrl ? (
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : null}
          </div>

          {/* Content */}
          <div className="space-y-6 lg:order-2">
            <h2 className="text-display-lg md:text-display-xl">{title}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              <Tags tags={technologies} />
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {demoUrl && (
                <Link
                  to={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "gap-2"
                  )}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              )}
              {githubUrl && (
                <Link
                  to={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "gap-2"
                  )}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              )}
              {codesandboxUrl && (
                <Link
                  to={codesandboxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "gap-2"
                  )}
                >
                  <Code2 className="h-4 w-4" />
                  CodeSandbox
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 