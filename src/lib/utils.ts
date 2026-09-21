import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Difficulty } from "@/data/exercises"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface DifficultyStyle {
  classes: string
  dot: string
}

export function difficultyStyles(difficulty: Difficulty): DifficultyStyle {
  switch (difficulty) {
    case 'Beginner':
      return {
        classes: 'bg-lime/20 text-lime border border-lime/30',
        dot: 'bg-lime',
      }
    case 'Intermediate':
      return {
        classes: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
        dot: 'bg-yellow-400',
      }
    case 'Advanced':
      return {
        classes: 'bg-red-500/20 text-red-400 border border-red-500/30',
        dot: 'bg-red-400',
      }
  }
}
