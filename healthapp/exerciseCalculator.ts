interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function parseExercisesArguments(args: string[]): { dailyExerciseHours: number[]; target: number } {
  if (args.length < 4) {
    throw new Error("Not enough arguments");
  }

  let dailyExerciseHours = [];
  let target = Number(args[2]);

  if (isNaN(target)) {
    throw new Error("Provided values were not numbers!");
  }

  for (let i = 3; i < args.length; i++) {
    const number = Number(args[i]);
    if (!isNaN(number)) {
      dailyExerciseHours.push(number);
    } else {
      throw new Error("Provided values were not numbers!");
    }
  }
  if (dailyExerciseHours.length === 0) {
    throw new Error("At least one exercise hour is required");
  }

  return { dailyExerciseHours, target };
}

function calculateExercises(dailyExerciseHours: number[], target: number): Result {
  const periodLength = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.filter((hours) => hours > 0).length;
  const totalHours = dailyExerciseHours.reduce((sum, hour) => sum + hour, 0);
  const average = totalHours / periodLength;
  const success = average >= target;

  let rating = 0;
  let ratingDescription = "";

  const excellent = target;
  const notTooBad = target * 0.6;

  if (average >= excellent) {
    rating = 3;
    ratingDescription = "Excellent, youre a winner! You met or exceeded your own goals!";
  } else if (average >= notTooBad) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "work harder not smarter";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
}

try {
  const { dailyExerciseHours, target } = parseExercisesArguments(process.argv);
  console.log(calculateExercises(dailyExerciseHours, target));
} catch (error: any) {
  console.error("Error:", error.message);
  console.log("Usage: npm run calculateExercises <target> <hour1> <hour2> ...");
}
