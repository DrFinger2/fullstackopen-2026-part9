function parseBmiArguments(args: string[]): { height: number; weight: number } {
  if (args.length < 4) {
    throw new Error("Not enough arguments: need height and weight");
  }
  const height = Number(args[2]);
  const weight = Number(args[3]);
  if (isNaN(height) || isNaN(weight)) {
    throw new Error("Provided values were not numbers!");
  }
  return { height, weight };
}

export function calculateBmi(height: number, weight: number): string {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal range";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

if (process.argv[1] === import.meta.filename) {
  try {
    const { height, weight } = parseBmiArguments(process.argv);
    console.log(calculateBmi(height, weight));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Error: ", "Unknown error");
    }

    console.log("Usage: npm run calculateBmi <height in cm> <weight in kg>");
  }
}

export default calculateBmi;
