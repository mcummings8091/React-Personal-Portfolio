import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: ReactNode;
  color?: "dark" | "primary" | "secondary";
  onClick: () => void;
}

const DarkButton = ({ children, color = "dark", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default DarkButton;
