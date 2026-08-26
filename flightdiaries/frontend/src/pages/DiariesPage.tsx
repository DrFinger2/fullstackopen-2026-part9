import type { DiaryEntry } from "../utils/types";
import Header from "../components/Header";
import Content from "../components/Content";

interface DiariesPageProps {
  entires: DiaryEntry[];
}

const DiariesPage = (props: DiariesPageProps) => {
  return (
    <div>
      <Header name="Flight diaries" />
      <Content entries={props.entires} />
    </div>
  );
};

export default DiariesPage;
