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
    <fieldset>
      <legend>
        <strong>{part.name}</strong>
      </legend>
      <p>Project exercises: {part.exerciseCount}</p>
      <p>{part.description}</p>
    </fieldset>
  );

  const renderGroup = (part: CoursePartGroup) => (
    <fieldset>
      <legend>
        <strong>{part.name}</strong>
      </legend>
      <p>Project exercises: {part.exerciseCount}</p>
      <p>Group project count: {part.groupProjectCount}</p>
    </fieldset>
  );

  const renderBackground = (part: CoursePartBackground) => (
    <fieldset>
      <legend>
        <strong>{part.name}</strong>
      </legend>
      <p>Project exercises: {part.exerciseCount}</p>
      <p>{part.description}</p>
      <p>Background material: {part.backgroundMaterial}</p>
    </fieldset>
  );

  const renderSpecial = (part: CoursePartSpecial) => (
    <fieldset>
      <legend>
        <strong>{part.name}</strong>
      </legend>
      <p>Project exercises: {part.exerciseCount}</p>
      <p>{part.description}</p>
      <p>Required skills: {part.requirements.join(", ")}</p>
    </fieldset>
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
