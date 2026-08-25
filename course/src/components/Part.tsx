import type {
  CoursePart,
  CoursePartBackground,
  CoursePartBasic,
  CoursePartGroup,
  CoursePartSpecial,
} from "../utils/types";
import assertNever from "../utils/assertNever";

interface PartProps {
  part: CoursePart;
}

const Part = (props: PartProps) => {
  const renderBasic = (part: CoursePartBasic) => (
    <div>
      <p>name: {part.name}</p>
      <p>exercise count: {part.exerciseCount}</p>
      <p>description: {part.description}</p>
    </div>
  );
  const renderGroup = (part: CoursePartGroup) => (
    <div>
      <p>name: {part.name}</p>
      <p>exercise count: {part.exerciseCount}</p>
      <p>group project count: {part.groupProjectCount}</p>
    </div>
  );
  const renderBackground = (part: CoursePartBackground) => (
    <div>
      <p>name: {part.name}</p>
      <p>exercise count: {part.exerciseCount}</p>
      <p>description: {part.description}</p>
      <p>background material: {part.backgroundMaterial}</p>
    </div>
  );
  const renderSpecial = (part: CoursePartSpecial) => (
    <div>
      <p>name: {part.name}</p>
      <p>exercise count: {part.exerciseCount}</p>
      <p>description: {part.description}</p>
      <p>required skills:</p>
      {part.requirements.map((text) => (
        <div key={text}>{text}</div>
      ))}
    </div>
  );

  switch (props.part.kind) {
    case "basic":
      return renderBasic(props.part);
    case "group":
      return renderGroup(props.part);
    case "background":
      return renderBackground(props.part);
    case "special":
      return renderSpecial(props.part);
    default:
      return assertNever(props.part);
  }
};

export default Part;
