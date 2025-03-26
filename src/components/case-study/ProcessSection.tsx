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

interface StepProps {
  title: string;
  content: string;
  keyPoints?: string[];
}

function Step({ title, content, keyPoints }: StepProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-display-sm text-foreground">{title}</h3>
      <p className="text-body-lg text-foreground">{content}</p>
      {keyPoints && <KeyPointsList points={keyPoints} />}
    </div>
  );
}

interface StepsListProps {
  steps: StepProps[];
}

function StepsList({ steps }: StepsListProps) {
  return (
    <div className="flex flex-col gap-10">
      {steps.map(step => (
        <Step key={step.title} {...step} />
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

export interface ProcessSectionProps {
  title: string;
  content: string;
  steps?: StepProps[];
  className?: string;
}

export function ProcessSection({ title, content, steps, className }: ProcessSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <SectionHeader title={title} content={content} />
      {steps && <StepsList steps={steps} />}
    </div>
  );
} 