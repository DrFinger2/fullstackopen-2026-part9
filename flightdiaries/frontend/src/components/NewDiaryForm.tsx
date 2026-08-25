import { useState } from "react";
import type { NewDiaryEntry } from "../utils/types";
import { Weather, Visibility } from "../utils/types";

import useField from "../hooks/useField";
import RadioGroup from "./RadioGroup";

interface NewDiaryProps {
  onSubmit: (newEntry: NewDiaryEntry) => Promise<boolean>;
}

const NewDiaryForm = (props: NewDiaryProps) => {
  const date = useField("date");
  const comment = useField("text");
  const [weather, setWeather] = useState("sunny");
  const [visibility, setVisibility] = useState("great");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const ok = await props.onSubmit({
      date: date.field.value,
      weather: weather as NewDiaryEntry["weather"],
      visibility: visibility as NewDiaryEntry["visibility"],
      comment: comment.field.value || undefined,
    });

    if (ok) {
      date.reset();
      comment.reset();
      setWeather("sunny");
      setVisibility("great");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          <label htmlFor="date">Date</label>
        </legend>
        <input id="date" {...date.field} />
      </fieldset>

      <fieldset>
        <legend>Weather</legend>
        <RadioGroup
          options={Object.values(Weather)}
          value={weather}
          onChange={setWeather}
        />
      </fieldset>

      <fieldset>
        <legend>Visibility</legend>
        <RadioGroup
          options={Object.values(Visibility)}
          value={visibility}
          onChange={setVisibility}
        />
      </fieldset>

      <fieldset>
        <legend>
          <label htmlFor="comment">Comment</label>
        </legend>
        <input id="comment" {...comment.field} />
      </fieldset>
      <br />
      <button type="submit">Add entry</button>
    </form>
  );
};

export default NewDiaryForm;
