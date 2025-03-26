import { cn } from "@/lib/utils";

interface KeyPointsListProps {
  points: string[];
}

function KeyPointsList({ points }: KeyPointsListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {points.map((point, index) => (
        <li key={index} className="text-body-lg text-foreground flex items-center gap-3">
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
    <div className="flex flex-col gap-2">
      <h3 className="text-display-sm text-foreground">{title}</h3>
      <p className="text-body-lg text-foreground">{content}</p>
      {keyPoints && <KeyPointsList points={keyPoints} />}
    </div>
  );
}

interface SubsectionsListProps {
  subsections: SubsectionProps[];
}

function SubsectionsList({ subsections }: SubsectionsListProps) {
  return (
    <div className="flex flex-col gap-10">
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
    <div className="flex flex-col gap-2">
      <h2 className="text-display-md md:text-display-lg text-foreground">
        {title}
      </h2>
      <p className="text-body-lg text-foreground">
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
    <div className={cn("flex flex-col gap-10", className)}>
      <SectionHeader title={title} content={content} />
      {subsections && <SubsectionsList subsections={subsections} />}
    </div>
  );
} 