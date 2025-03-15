import { cn } from "@/lib/utils"

export interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg"
}

export function ArrowRight({ className, size = "md", ...props }: ArrowRightProps) {
  const sizeMap = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-7 w-7"
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeMap[size], "transition-transform group-hover:translate-x-0.5", className)}
      {...props}
    >
      <path
        d="M13.75 6.75L19.25 12L13.75 17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
} 