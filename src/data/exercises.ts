export type ExerciseCategory =
  | 'Chest'
  | 'Back'
  | 'Legs'
  | 'Shoulders'
  | 'Arms'
  | 'Core'
  | 'Cardio'

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Exercise {
  id: string
  name: string
  description: string
  category: ExerciseCategory
  targetMuscles: string[]
  equipment: string
  difficulty: Difficulty
  image: string
  instructions: string[]
}

export const exerciseCategories: ExerciseCategory[] = [
  'Chest',
  'Back',
  'Legs',
  'Shoulders',
  'Arms',
  'Core',
  'Cardio',
]

export const exercises: Exercise[] = [
  {
    id: 'bench-press',
    name: 'Barbell Bench Press',
    description:
      'The king of upper-body pressing. Build raw chest strength and pushing power with this compound staple.',
    category: 'Chest',
    targetMuscles: ['Chest', 'Triceps', 'Front Delts'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/4944312/pexels-photo-4944312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Lie flat on the bench with eyes directly under the bar.',
      'Grip the bar slightly wider than shoulder-width.',
      'Plant feet firmly, retract shoulder blades, and brace core.',
      'Lower the bar to mid-chest with control.',
      'Press the bar back up explosively until arms are locked.',
    ],
  },
  {
    id: 'push-up',
    name: 'Push-Up',
    description:
      'A timeless bodyweight movement that builds chest, shoulder, and core strength — anywhere, anytime.',
    category: 'Chest',
    targetMuscles: ['Chest', 'Triceps', 'Core'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Start in a high plank with hands under shoulders.',
      'Keep your body in a straight line from head to heels.',
      'Lower your chest toward the floor by bending elbows at 45°.',
      'Push through your palms to return to start.',
      'Keep core tight throughout — no sagging hips.',
    ],
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    description:
      'Target the upper chest fibers for a fuller, more defined pec development.',
    category: 'Chest',
    targetMuscles: ['Upper Chest', 'Front Delts', 'Triceps'],
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Set an incline bench to 30–45 degrees.',
      'Sit back with dumbbells at shoulder level.',
      'Press the weights up and slightly together.',
      'Lower with control to stretch the upper chest.',
      'Keep wrists stacked over elbows throughout.',
    ],
  },
  {
    id: 'deadlift',
    name: 'Conventional Deadlift',
    description:
      'The ultimate test of full-body strength. Posterior chain power from floor to lockout.',
    category: 'Back',
    targetMuscles: ['Hamstrings', 'Glutes', 'Lats', 'Lower Back', 'Traps'],
    equipment: 'Barbell',
    difficulty: 'Advanced',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Stand with feet hip-width, bar over mid-foot.',
      'Hinge at hips and grip the bar just outside knees.',
      'Brace core, set back flat, and drive through the floor.',
      'Lock out hips and knees simultaneously at the top.',
      'Lower the bar with control by hinging first, then bending knees.',
    ],
  },
  {
    id: 'pull-up',
    name: 'Pull-Up',
    description:
      'The gold standard for upper-body pulling strength and back development.',
    category: 'Back',
    targetMuscles: ['Lats', 'Biceps', 'Rhomboids', 'Rear Delts'],
    equipment: 'Pull-Up Bar',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/7672092/pexels-photo-7672092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Grip the bar slightly wider than shoulder-width, palms facing away.',
      'Hang with arms fully extended and core engaged.',
      'Pull your chin above the bar by driving elbows down.',
      'Squeeze shoulder blades together at the top.',
      'Lower with control to a full hang.',
    ],
  },
  {
    id: 'barbell-row',
    name: 'Bent-Over Barbell Row',
    description:
      'Build a thick, powerful back with this compound horizontal pull.',
    category: 'Back',
    targetMuscles: ['Lats', 'Rhomboids', 'Rear Delts', 'Biceps'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/17944268/pexels-photo-17944268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Hinge forward at the hips with a flat back, bar hanging below.',
      'Grip the bar with hands just outside knee width.',
      'Pull the bar to your lower ribcage, squeezing the back.',
      'Lower the bar with control until arms are fully extended.',
      'Maintain a neutral spine throughout the movement.',
    ],
  },
  {
    id: 'back-squat',
    name: 'Back Squat',
    description:
      'The foundation of lower-body strength. Quads, glutes, and core in one powerful movement.',
    category: 'Legs',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings', 'Core'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Rest the bar across your upper traps, not on your neck.',
      'Stance slightly wider than shoulders, toes pointed out.',
      'Brace core and descend by sitting back and bending knees.',
      'Reach below parallel if mobility allows.',
      'Drive through mid-foot to stand back up explosively.',
    ],
  },
  {
    id: 'lunges',
    name: 'Walking Lunges',
    description:
      'Build unilateral leg strength, balance, and hip mobility with this functional movement.',
    category: 'Legs',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Hold dumbbells at your sides, stand tall.',
      'Step forward with one leg into a long stride.',
      'Lower until both knees are at 90 degrees.',
      'Push through the front heel to bring the back leg forward.',
      'Continue alternating legs in a walking motion.',
    ],
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    description:
      'Safely overload the lower body for serious quad and glute development.',
    category: 'Legs',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    equipment: 'Machine',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Sit in the machine with feet shoulder-width on the platform.',
      'Release the safety and lower the platform by bending knees.',
      'Stop when knees reach about 90 degrees.',
      'Press through your heels to push the platform back.',
      'Keep your lower back flat against the pad.',
    ],
  },
  {
    id: 'overhead-press',
    name: 'Standing Overhead Press',
    description:
      'Build powerful, broad shoulders with this compound vertical press.',
    category: 'Shoulders',
    targetMuscles: ['Shoulders', 'Triceps', 'Upper Chest', 'Core'],
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Start with the bar at shoulder level in a rack or from the floor.',
      'Grip slightly wider than shoulders, elbows under the bar.',
      'Brace core and press the bar straight overhead.',
      'Lock out with the bar directly over mid-foot.',
      'Lower to the starting position with control.',
    ],
  },
  {
    id: 'lateral-raise',
    name: 'Dumbbell Lateral Raise',
    description:
      'Isolate the side delts for wider, more defined shoulders.',
    category: 'Shoulders',
    targetMuscles: ['Side Delts', 'Traps'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/4090063/pexels-photo-4090063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Stand with dumbbells at your sides, palms facing in.',
      'Raise both arms out to the sides with a slight bend.',
      'Lift until arms are parallel to the floor.',
      'Pause briefly at the top, then lower slowly.',
      'Avoid swinging or using momentum.',
    ],
  },
  {
    id: 'bicep-curl',
    name: 'Dumbbell Bicep Curl',
    description:
      'The classic arm builder for peak bicep development.',
    category: 'Arms',
    targetMuscles: ['Biceps', 'Forearms'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/5327571/pexels-photo-5327571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Stand with dumbbells at your sides, palms forward.',
      'Curl one dumbbell up while keeping the elbow pinned.',
      'Squeeze the bicep at the top.',
      'Lower slowly with full control.',
      'Alternate arms or do both simultaneously.',
    ],
  },
  {
    id: 'tricep-dip',
    name: 'Tricep Dips',
    description:
      'Build horseshoe triceps with this bodyweight pressing movement.',
    category: 'Arms',
    targetMuscles: ['Triceps', 'Chest', 'Front Delts'],
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/4162478/pexels-photo-4162478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Grip parallel bars and lift yourself to full arm extension.',
      'Lean forward slightly and lower your body by bending elbows.',
      'Descend until shoulders are below elbow level.',
      'Press back up by extending the arms.',
      'Keep elbows close to your body throughout.',
    ],
  },
  {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    description:
      'Target the brachialis and forearms for thicker, more muscular arms.',
    category: 'Arms',
    targetMuscles: ['Biceps', 'Brachialis', 'Forearms'],
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/5327466/pexels-photo-5327466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Hold dumbbells with a neutral grip (palms facing each other).',
      'Curl the weights up while keeping the neutral grip.',
      'Squeeze at the top without rotating the wrists.',
      'Lower with control to the starting position.',
      'Keep elbows stationary throughout.',
    ],
  },
  {
    id: 'plank',
    name: 'Forearm Plank',
    description:
      'Build isometric core strength and stability — the foundation of all movement.',
    category: 'Core',
    targetMuscles: ['Core', 'Shoulders', 'Glutes'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/8173429/pexels-photo-8173429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Place forearms on the ground, elbows under shoulders.',
      'Extend legs straight back, body in a line.',
      'Brace core and squeeze glutes.',
      'Hold the position without letting hips sag or pike.',
      'Breathe steadily throughout the hold.',
    ],
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    description:
      'Advanced core exercise targeting the lower abs and hip flexors.',
    category: 'Core',
    targetMuscles: ['Lower Abs', 'Hip Flexors', 'Obliques'],
    equipment: 'Pull-Up Bar',
    difficulty: 'Advanced',
    image: 'https://images.pexels.com/photos/4971061/pexels-photo-4971061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Hang from a pull-up bar with arms fully extended.',
      'Engage your core and raise your legs straight up.',
      'Bring legs to at least hip height (or to the bar for advanced).',
      'Lower with control, avoiding swinging.',
      'Keep the movement slow and deliberate.',
    ],
  },
  {
    id: 'russian-twist',
    name: 'Russian Twist',
    description:
      'Rotational core movement that targets the obliques and improves trunk mobility.',
    category: 'Core',
    targetMuscles: ['Obliques', 'Core', 'Hip Flexors'],
    equipment: 'Weight Plate',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Sit on the floor with knees bent, lean back slightly.',
      'Hold a weight plate or dumbbell with both hands.',
      'Rotate your torso to one side, touching the weight to the floor.',
      'Rotate to the other side in a controlled motion.',
      'Keep feet elevated for added difficulty.',
    ],
  },
  {
    id: 'burpees',
    name: 'Burpees',
    description:
      'A full-body explosive movement that builds cardio endurance and total-body power.',
    category: 'Cardio',
    targetMuscles: ['Full Body', 'Core', 'Legs', 'Chest'],
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/4720291/pexels-photo-4720291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Start standing, then drop into a squat with hands on the floor.',
      'Kick feet back into a plank position.',
      'Perform a push-up (optional), then jump feet back to squat.',
      'Explode up into a jump with arms overhead.',
      'Land softly and immediately begin the next rep.',
    ],
  },
  {
    id: 'jump-rope',
    name: 'Jump Rope',
    description:
      'High-intensity cardio that improves coordination, agility, and conditioning.',
    category: 'Cardio',
    targetMuscles: ['Calves', 'Shoulders', 'Core'],
    equipment: 'Jump Rope',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Hold the rope handles at hip height, elbows close to body.',
      'Swing the rope overhead using your wrists.',
      'Jump just enough to clear the rope — stay light on the balls of feet.',
      'Keep jumps small and rhythmic.',
      'Maintain a steady breathing pattern.',
    ],
  },
  {
    id: 'mountain-climbers',
    name: 'Mountain Climbers',
    description:
      'Dynamic cardio and core exercise that fires up the heart rate and abs.',
    category: 'Cardio',
    targetMuscles: ['Core', 'Shoulders', 'Quads', 'Hip Flexors'],
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    image: 'https://images.pexels.com/photos/6390227/pexels-photo-6390227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Start in a high plank position with core engaged.',
      'Drive one knee toward your chest.',
      'Quickly switch legs in a running motion.',
      'Keep hips low and back flat.',
      'Maintain a fast, steady pace.',
    ],
  },
  {
    id: 'battle-ropes',
    name: 'Battle Ropes',
    description:
      'Explosive conditioning tool that torches calories and builds upper-body endurance.',
    category: 'Cardio',
    targetMuscles: ['Shoulders', 'Arms', 'Core', 'Back'],
    equipment: 'Battle Ropes',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/6390240/pexels-photo-6390240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    instructions: [
      'Grab each end of the rope, feet shoulder-width apart.',
      'Lower into a quarter squat with core braced.',
      'Alternate or simultaneously wave the ropes up and down.',
      'Create fast, powerful waves for the desired duration.',
      'Keep a slight bend in knees and maintain posture.',
    ],
  },
]
