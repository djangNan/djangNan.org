"use client";

import { type ElementType } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/cn";

const sizeClasses = {
  icon: "flex items-center justify-center w-9 h-9",
  sm: "flex items-center gap-2 text-sm font-sans font-medium px-4 py-2",
  lg: "group flex items-center gap-3 text-sm md:text-base font-medium font-sans px-8 py-4",
} as const;

const baseClasses =
  "border border-foreground/10 hover:border-orange-500/40 bg-background/70 hover:bg-foreground/5 backdrop-blur-md rounded-full transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]";

type GlassButtonProps<T extends ElementType> = {
  as?: T;
  size?: keyof typeof sizeClasses;
} & HTMLMotionProps<T extends "a" ? "a" : "button">;

export function GlassButton<T extends "button" | "a" = "button">({
  as,
  size = "icon",
  className,
  ...props
}: GlassButtonProps<T>) {
  const Component = motion[as ?? "button"] as ElementType;

  return (
    <Component
      className={cn(sizeClasses[size], baseClasses, className)}
      whileTap={{ scale: 1.1 }}
      {...props}
    />
  );
}
