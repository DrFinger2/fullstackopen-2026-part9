import Header from "../components/Header";
import NewDiaryForm from "../components/NewDiaryForm";
import type { NewDiaryEntry } from "../utils/types";

const AddNewDiaryPage = () => {
  const handleSubmit = (newEntry: NewDiaryEntry) => {
    console.log(newEntry);
  };

  return (
    <div>
      <Header name="Add new entry" />
      <NewDiaryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddNewDiaryPage;
