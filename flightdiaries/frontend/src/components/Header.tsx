interface HeaderProps {
  name: string;
}

const Header = ({ name: title }: HeaderProps) => {
  return <h1>{title}</h1>;
};

export default Header;
