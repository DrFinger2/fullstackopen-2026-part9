interface ShowProps {
  when: boolean;
  children: React.ReactNode;
}

const Show = ({ when, children }: ShowProps) => {
  if (when) {
    return children;
  } else {
    return null;
  }
};

export default Show;
