import { cn } from "@/lib/utils";

interface KeyPointsListProps {
  points: string[];
}

function KeyPointsList({ points }: KeyPointsListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {points.map((point, index) => (
        <li key={index} className="text-body-lg text-muted-foreground flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {point}
        </li>
      ))}
    </ul>
  );
}

interface SubsectionProps {
  title: string;
  content: string;
  keyPoints?: string[];
}

function Subsection({ title, content, keyPoints }: SubsectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-display-sm font-normal text-accent">{title}</h3>
      <p className="text-body-lg text-muted-foreground">{content}</p>
      {keyPoints && <KeyPointsList points={keyPoints} />}
    </div>
  );
}

interface SubsectionsListProps {
  subsections: SubsectionProps[];
}

function SubsectionsList({ subsections }: SubsectionsListProps) {
  return (
    <div className="flex flex-col gap-6">
      {subsections.map(subsection => (
        <Subsection key={subsection.title} {...subsection} />
      ))}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  content: string;
}

function SectionHeader({ title, content }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-display-md md:text-display-lg font-normal text-accent">
        {title}
      </h2>
      <p className="text-body-lg text-muted-foreground">
        {content}
      </p>
    </div>
  );
}

export interface NarrativeSectionProps {
  title: string;
  content: string;
  subsections?: SubsectionProps[];
  className?: string;
}

export function NarrativeSection({ title, content, subsections, className }: NarrativeSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <SectionHeader title={title} content={content} />
      {subsections && <SubsectionsList subsections={subsections} />}
    </div>
  );
} 