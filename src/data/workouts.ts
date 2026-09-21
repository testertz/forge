import type { Difficulty } from './exercises'

export type WorkoutCategory =
  | 'Strength'
  | 'Cardio'
  | 'HIIT'
  | 'Flexibility'
  | 'Core'
  | 'Home'

export interface ExerciseRef {
  exerciseId: string
  sets: number
  reps: string
  restTime: number // seconds
}

export interface Workout {
  id: string
  title: string
  description: string
  category: WorkoutCategory
  difficulty: Difficulty
  duration: number // minutes
  calories: number
  image: string
  exercises: ExerciseRef[]
  tags: string[]
  featured?: boolean
}

export const workoutCategories: Array<'All' | WorkoutCategory> = [
  'All',
  'Strength',
  'Cardio',
  'HIIT',
  'Flexibility',
  'Core',
  'Home',
]

export const difficulties: Array<'All' | Difficulty> = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced',
]

export const workouts: Workout[] = [
  {
    id: 'power-builder',
    title: 'Power Builder',
    description:
      'A heavy compound-focused session designed to build raw strength across the entire body.',
    category: 'Strength',
    difficulty: 'Advanced',
    duration: 55,
    calories: 480,
    image: 'https://images.pexels.com/photos/931321/pexels-photo-931321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'back-squat', sets: 5, reps: '5', restTime: 180 },
      { exerciseId: 'bench-press', sets: 5, reps: '5', restTime: 150 },
      { exerciseId: 'barbell-row', sets: 4, reps: '6', restTime: 120 },
      { exerciseId: 'overhead-press', sets: 4, reps: '8', restTime: 120 },
    ],
    tags: ['Compound', 'Heavy', 'Full Body'],
    featured: true,
  },
  {
    id: 'hiit-inferno',
    title: 'HIIT Inferno',
    description:
      'A fast-paced, heart-pounding interval session that torches calories and pushes your limits.',
    category: 'HIIT',
    difficulty: 'Advanced',
    duration: 25,
    calories: 380,
    image: 'https://images.pexels.com/photos/6390240/pexels-photo-6390240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'burpees', sets: 5, reps: '20 sec', restTime: 10 },
      { exerciseId: 'mountain-climbers', sets: 5, reps: '30 sec', restTime: 15 },
      { exerciseId: 'jump-rope', sets: 5, reps: '45 sec', restTime: 15 },
      { exerciseId: 'battle-ropes', sets: 4, reps: '30 sec', restTime: 20 },
    ],
    tags: ['High Intensity', 'No Equipment', 'Fat Burn'],
    featured: true,
  },
  {
    id: 'upper-power',
    title: 'Upper Body Power',
    description:
      'Sculpt and strengthen your chest, back, and shoulders with this comprehensive upper-body workout.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 45,
    calories: 320,
    image: 'https://images.pexels.com/photos/4944006/pexels-photo-4944006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'bench-press', sets: 4, reps: '8', restTime: 120 },
      { exerciseId: 'pull-up', sets: 4, reps: '8', restTime: 120 },
      { exerciseId: 'overhead-press', sets: 3, reps: '10', restTime: 90 },
      { exerciseId: 'barbell-row', sets: 3, reps: '10', restTime: 90 },
      { exerciseId: 'bicep-curl', sets: 3, reps: '12', restTime: 60 },
      { exerciseId: 'tricep-dip', sets: 3, reps: '12', restTime: 60 },
    ],
    tags: ['Upper Body', 'Hypertrophy', 'Dumbbells'],
    featured: true,
  },
  {
    id: 'leg-day-destroyer',
    title: 'Leg Day Destroyer',
    description:
      'Leave nothing in the tank. This brutal lower-body session hits every muscle from hips to calves.',
    category: 'Strength',
    difficulty: 'Advanced',
    duration: 50,
    calories: 420,
    image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'back-squat', sets: 5, reps: '5', restTime: 150 },
      { exerciseId: 'leg-press', sets: 4, reps: '10', restTime: 90 },
      { exerciseId: 'lunges', sets: 3, reps: '12 each', restTime: 60 },
      { exerciseId: 'deadlift', sets: 3, reps: '6', restTime: 120 },
    ],
    tags: ['Lower Body', 'Heavy', 'Compound'],
    featured: true,
  },
  {
    id: 'core-crusher',
    title: 'Core Crusher',
    description:
      'Chisel your midsection with targeted movements that hit every angle of the core.',
    category: 'Core',
    difficulty: 'Intermediate',
    duration: 20,
    calories: 180,
    image: 'https://images.pexels.com/photos/416747/pexels-photo-416747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'plank', sets: 3, reps: '45 sec', restTime: 30 },
      { exerciseId: 'hanging-leg-raise', sets: 3, reps: '12', restTime: 45 },
      { exerciseId: 'russian-twist', sets: 3, reps: '20', restTime: 30 },
      { exerciseId: 'mountain-climbers', sets: 3, reps: '40 sec', restTime: 20 },
    ],
    tags: ['Abs', 'Bodyweight', 'Quick'],
    featured: true,
  },
  {
    id: 'home-burner',
    title: 'Home Burner',
    description:
      'No gym, no problem. A full-body workout you can do in your living room with zero equipment.',
    category: 'Home',
    difficulty: 'Beginner',
    duration: 30,
    calories: 240,
    image: 'https://images.pexels.com/photos/23224739/pexels-photo-23224739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'push-up', sets: 4, reps: '12', restTime: 45 },
      { exerciseId: 'lunges', sets: 4, reps: '10 each', restTime: 45 },
      { exerciseId: 'plank', sets: 3, reps: '40 sec', restTime: 30 },
      { exerciseId: 'burpees', sets: 3, reps: '10', restTime: 45 },
      { exerciseId: 'mountain-climbers', sets: 3, reps: '30 sec', restTime: 30 },
    ],
    tags: ['No Equipment', 'Full Body', 'Beginner Friendly'],
    featured: true,
  },
  {
    id: 'cardio-blast',
    title: 'Cardio Blast',
    description:
      'Get your heart racing and sweat pouring with this high-energy cardio conditioning session.',
    category: 'Cardio',
    difficulty: 'Intermediate',
    duration: 35,
    calories: 350,
    image: 'https://images.pexels.com/photos/6388450/pexels-photo-6388450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'jump-rope', sets: 5, reps: '60 sec', restTime: 30 },
      { exerciseId: 'mountain-climbers', sets: 4, reps: '45 sec', restTime: 20 },
      { exerciseId: 'burpees', sets: 4, reps: '15', restTime: 30 },
      { exerciseId: 'battle-ropes', sets: 4, reps: '40 sec', restTime: 25 },
    ],
    tags: ['Conditioning', 'Endurance', 'Fat Burn'],
  },
  {
    id: 'flexibility-flow',
    title: 'Flexibility Flow',
    description:
      'Improve mobility, reduce injury risk, and recover faster with this guided stretching routine.',
    category: 'Flexibility',
    difficulty: 'Beginner',
    duration: 25,
    calories: 100,
    image: 'https://images.pexels.com/photos/3822534/pexels-photo-3822534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'plank', sets: 2, reps: '30 sec', restTime: 15 },
      { exerciseId: 'lunges', sets: 2, reps: '8 each', restTime: 20 },
    ],
    tags: ['Mobility', 'Recovery', 'Low Impact'],
  },
  {
    id: 'beginner-strength',
    title: 'Beginner Strength',
    description:
      'Start your strength journey right with fundamental movements and manageable volumes.',
    category: 'Strength',
    difficulty: 'Beginner',
    duration: 40,
    calories: 260,
    image: 'https://images.pexels.com/photos/4720790/pexels-photo-4720790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'back-squat', sets: 3, reps: '8', restTime: 90 },
      { exerciseId: 'bench-press', sets: 3, reps: '8', restTime: 90 },
      { exerciseId: 'barbell-row', sets: 3, reps: '10', restTime: 75 },
      { exerciseId: 'bicep-curl', sets: 2, reps: '12', restTime: 60 },
    ],
    tags: ['Beginner', 'Full Body', 'Fundamentals'],
  },
  {
    id: 'arm-armor',
    title: 'Arm Armor',
    description:
      'Build sleeve-busting arms with dedicated bicep and tricep volume in this isolation-focused session.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 30,
    calories: 220,
    image: 'https://images.pexels.com/photos/5327483/pexels-photo-5327483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'bicep-curl', sets: 4, reps: '10', restTime: 60 },
      { exerciseId: 'hammer-curl', sets: 4, reps: '12', restTime: 60 },
      { exerciseId: 'tricep-dip', sets: 4, reps: '10', restTime: 60 },
      { exerciseId: 'overhead-press', sets: 3, reps: '10', restTime: 75 },
    ],
    tags: ['Arms', 'Isolation', 'Hypertrophy'],
  },
  {
    id: 'back-forge',
    title: 'Back Forge',
    description:
      'Build a wide, thick back with vertical and horizontal pulling in this targeted session.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 40,
    calories: 300,
    image: 'https://images.pexels.com/photos/5750626/pexels-photo-5750626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'pull-up', sets: 4, reps: '8', restTime: 120 },
      { exerciseId: 'barbell-row', sets: 4, reps: '8', restTime: 90 },
      { exerciseId: 'deadlift', sets: 3, reps: '5', restTime: 150 },
      { exerciseId: 'hammer-curl', sets: 3, reps: '12', restTime: 60 },
    ],
    tags: ['Back', 'Pull', 'V-Taper'],
  },
  {
    id: 'express-hiit',
    title: 'Express HIIT',
    description:
      'Short on time? This 15-minute HIIT session delivers maximum burn in minimum minutes.',
    category: 'HIIT',
    difficulty: 'Intermediate',
    duration: 15,
    calories: 200,
    image: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'burpees', sets: 4, reps: '30 sec', restTime: 15 },
      { exerciseId: 'mountain-climbers', sets: 4, reps: '30 sec', restTime: 15 },
      { exerciseId: 'jump-rope', sets: 4, reps: '30 sec', restTime: 15 },
    ],
    tags: ['Quick', 'No Equipment', 'Fat Burn'],
  },
  {
    id: 'shoulder-sculpt',
    title: 'Shoulder Sculpt',
    description:
      'Carve boulder shoulders with pressing and lateral raise combinations for 3D delt development.',
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 35,
    calories: 250,
    image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    exercises: [
      { exerciseId: 'overhead-press', sets: 4, reps: '8', restTime: 90 },
      { exerciseId: 'lateral-raise', sets: 4, reps: '12', restTime: 45 },
      { exerciseId: 'push-up', sets: 3, reps: '15', restTime: 45 },
    ],
    tags: ['Shoulders', 'Delts', 'Hypertrophy'],
  },
]

export function getWorkoutById(id: string): Workout | undefined {
  return workouts.find((w) => w.id === id)
}

export function getRelatedWorkouts(workout: Workout, count = 3): Workout[] {
  return workouts
    .filter((w) => w.id !== workout.id && w.category === workout.category)
    .slice(0, count)
}
