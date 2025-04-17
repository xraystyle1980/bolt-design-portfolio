import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/Lightbox";
import { Subsection } from '@/data/types';
import { Github, ExternalLink, Figma } from 'lucide-react';
import { Banner } from '@/components/ui/banner';

interface FlexColumnSectionProps {
  title: string;
  content: string;
  items?: Subsection[];
}

export function FlexColumnSection({ title, content, items = [] }: FlexColumnSectionProps) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-display-md text-foreground">{title}</h3>
        <div 
          className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          {/* Only render title here if not in a grid layout */}
          {item.title && !item.variant && (
            <div 
              className="text-display-sm text-foreground"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          )}
          {/* Instruction-style content with banner and image/video */}
          {item.content && item.variant ? (
            <div className={cn(
              (item.image || item.subsections?.[0]?.videoUrl) ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "flex flex-col gap-4",
              (item.image || item.subsections?.[0]?.videoUrl) && item.alignContent === 'center' ? "items-center" : "items-start"
            )}>
              <div className="flex flex-col gap-4">
                {item.title && (
                  <h4 className="text-display-sm text-foreground">{item.title}</h4>
                )}
                {item.variant !== 'default' ? (
                  <Banner variant={item.variant}>{item.content}</Banner>
                ) : (
                  <div 
                    className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                )}
                {item.link && (
                  <a 
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-lg font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 underline decoration-[1px] underline-offset-4"
                  >
                    {item.link.text}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              {item.image ? (
                <div className="flex flex-col gap-4">
                  <Lightbox 
                    src={item.image.url} 
                    alt={item.image.alt} 
                    className="w-full h-auto rounded-lg"
                  />
                  {item.image.caption && (
                    <p className="text-body-sm text-muted-foreground mt-2 text-center">{item.image.caption}</p>
                  )}
                </div>
              ) : item.subsections?.[0]?.videoUrl && (
                <div className="flex flex-col gap-4">
                  <Lightbox 
                    images={[{
                      url: item.subsections[0].videoUrl,
                      alt: "Video content",
                      videoUrl: item.subsections[0].videoUrl,
                      aspectRatio: item.subsections[0].aspectRatio
                    }]}
                  />
                  {item.subsections[0].caption && (
                    <p className="text-body-sm text-muted-foreground mt-2 text-center">{item.subsections[0].caption}</p>
                  )}
                </div>
              )}
            </div>
          ) : item.content && (
            <div 
              className="text-body-lg text-foreground [&>a]:text-foreground [&>a]:underline [&>a]:decoration-[0.5px] [&>a]:underline-offset-4 [&>a]:transition-colors hover:[&>a]:text-accent"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}

          {/* Only render image separately if there's no variant at all */}
          {item.image && !item.variant && (
            <div className="flex flex-col gap-4">
              <Lightbox 
                src={item.image.url} 
                alt={item.image.alt} 
                className="w-full h-auto rounded-lg"
              />
              {item.image.caption && (
                <p className="text-body-sm text-muted-foreground mt-2 text-center">{item.image.caption}</p>
              )}
            </div>
          )}

          {item.videoUrl && (
            <div className="flex flex-col gap-4">
              <Lightbox 
                images={[{
                  url: item.videoUrl,
                  alt: "Video content",
                  videoUrl: item.videoUrl,
                  aspectRatio: item.aspectRatio
                }]}
              />
              {item.caption && (
                <p className="text-body-sm text-muted-foreground text-center">{item.caption}</p>
              )}
            </div>
          )}

          {item.resources && item.resources.length > 0 && (
            <div className="flex flex-col gap-6 md:gap-8">
              {item.resources.map((resource) => (
                <div key={resource.url} className="rounded-xl border border-border bg-card">
                  {/* Header with resource name and link */}
                  <div className="flex items-center gap-3 p-6 border-b border-border">
                    {resource.type === 'github' ? (
                      <Github className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Figma className="h-5 w-5 text-muted-foreground" />
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-body-lg text-muted-foreground">
                        {resource.type === 'github' ? 'GitHub /' : 'Figma /'}
                      </span>
                      <a 
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-lg font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 underline decoration-[1px] underline-offset-4"
                      >
                        {resource.title}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Description and stats */}
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <p className="text-body-md text-muted-foreground">
                        {resource.description}
                      </p>
                      
                      {resource.type === 'figma' && resource.image && (
                        <div className="w-full md:w-48 flex-shrink-0 rounded-lg overflow-hidden border border-border">
                          <img
                            src={resource.image}
                            alt={`Preview of ${resource.title}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {item.images && item.images.length > 0 && (
            <div className="flex flex-col gap-4">
              {item.images[0].caption ? (
                <div className={cn(
                  "grid gap-4 md:gap-8",
                  item.images.length === 2 && "grid-cols-1 md:grid-cols-2"
                )}>
                  {item.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="flex flex-col gap-2">
                      <Lightbox 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-auto rounded-2xl"
                      />
                      {image.caption && (
                        <p className="text-body-sm text-muted-foreground text-center">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className={cn(
                    "grid gap-4 md:gap-8",
                    item.images.length === 2 && "grid-cols-1 md:grid-cols-2",
                    item.images.length === 3 && "grid-cols-1 md:grid-cols-3"
                  )}>
                    {item.images.map((image, imageIndex) => (
                      <Lightbox 
                        key={imageIndex}
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-auto rounded-2xl"
                      />
                    ))}
                  </div>
                  {item.caption && (
                    <p className="text-body-sm text-muted-foreground text-center">{item.caption}</p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
} 