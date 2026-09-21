import type { Difficulty } from './exercises'

export interface Program {
  id: string
  title: string
  description: string
  level: Difficulty
  duration: string
  workoutsPerWeek: number
  goals: string[]
  image: string
  workoutIds: string[]
}

export const programs: Program[] = [
  {
    id: 'beginner-foundation',
    title: 'Beginner Foundation',
    description:
      'Start your fitness journey with a structured 4-week program that builds strength, confidence, and habit — one session at a time.',
    level: 'Beginner',
    duration: '4 Weeks',
    workoutsPerWeek: 3,
    goals: ['Learn proper form', 'Build base strength', 'Establish routine', 'Improve mobility'],
    image: 'https://images.pexels.com/photos/6496124/pexels-photo-6496124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    workoutIds: ['beginner-strength', 'home-burner', 'core-crusher', 'flexibility-flow'],
  },
  {
    id: 'strength-builder',
    title: 'Strength Builder',
    description:
      'An 8-week progressive overload program designed to maximize strength across all major lifts. For those ready to get serious.',
    level: 'Intermediate',
    duration: '8 Weeks',
    workoutsPerWeek: 4,
    goals: ['Increase max strength', 'Build muscle mass', 'Master compound lifts', 'Track progress'],
    image: 'https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    workoutIds: ['power-builder', 'upper-power', 'leg-day-destroyer', 'back-forge', 'arm-armor', 'shoulder-sculpt'],
  },
  {
    id: 'hiit-fat-loss',
    title: 'HIIT Fat Loss',
    description:
      'Burn fat and boost conditioning with 6 weeks of high-intensity interval training. Short sessions, maximum results.',
    level: 'Intermediate',
    duration: '6 Weeks',
    workoutsPerWeek: 5,
    goals: ['Maximize fat burn', 'Boost cardio', 'Improve endurance', 'Time-efficient'],
    image: 'https://images.pexels.com/photos/7187951/pexels-photo-7187951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    workoutIds: ['hiit-inferno', 'express-hiit', 'cardio-blast', 'core-crusher'],
  },
  {
    id: 'home-workout',
    title: 'Home Workout',
    description:
      'No gym required. A 6-week bodyweight program you can do anywhere — your living room, a park, or a hotel room.',
    level: 'Beginner',
    duration: '6 Weeks',
    workoutsPerWeek: 4,
    goals: ['No equipment needed', 'Build functional strength', 'Improve core stability', 'Flexible schedule'],
    image: 'https://images.pexels.com/photos/4379292/pexels-photo-4379292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    workoutIds: ['home-burner', 'express-hiit', 'core-crusher', 'flexibility-flow', 'beginner-strength'],
  },
]

export function getProgramById(id: string): Program | undefined {
  return programs.find((p) => p.id === id)
}
