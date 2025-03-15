import { cn } from "@/lib/utils"
import React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px]", className)} {...props}>
      {children}
    </div>
  )
} 