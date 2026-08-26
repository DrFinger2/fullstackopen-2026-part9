import Header from "../components/Header";
import NewDiaryForm from "../components/NewDiaryForm";
import type { NewDiaryEntry } from "../utils/types";

interface NewDiaryPageProps {
  onSubmit: (newEntry: NewDiaryEntry) => Promise<boolean>;
}

const NewDiaryPage = (props: NewDiaryPageProps) => {
  return (
    <div>
      <Header name="Add new entry" />
      <NewDiaryForm onSubmit={props.onSubmit} />
    </div>
  );
};

export default NewDiaryPage;
