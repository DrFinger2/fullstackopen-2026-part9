interface TotalProps {
  courseParts: { name: string; exerciseCount: number }[];
}
const Total = (props: TotalProps) => {
  const totalExercises = props.courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0,
  );

  return (
    <p>
      <strong>Number of exercises: {totalExercises}</strong>
    </p>
  );
};

export default Total;
