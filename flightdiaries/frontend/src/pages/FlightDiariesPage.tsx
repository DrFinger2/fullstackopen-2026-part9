import type { DiaryEntry } from "../utils/types";
import Header from "../components/Header";
import Content from "../components/Content";

interface FlightDiariesProps {
  entires: DiaryEntry[];
}

const FlightDiariesPage = (props: FlightDiariesProps) => {
  return (
    <div>
      <Header name="Flight diaries" />
      <Content entries={props.entires} />
    </div>
  );
};

export default FlightDiariesPage;
