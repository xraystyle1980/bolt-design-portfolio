import { Subsection as SubsectionType } from '@/data/types'

export function Subsection({ title, content, image }: SubsectionType) {
  return (
    <div className="flex flex-col gap-4">
      {title && <h3 className="text-xl font-semibold tracking-tight">{title}</h3>}
      <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: content }} />
      {image && (
        <div className="mt-4">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-auto rounded-lg"
          />
          {image.caption && (
            <p className="text-body-sm text-muted-foreground mt-2 text-center">{image.caption}</p>
          )}
        </div>
      )}
    </div>
  );
} 