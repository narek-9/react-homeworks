import { FC } from "react";
import "./Header.css";

interface HeaderProps {
   headerText: string;
}

const Header: FC<HeaderProps> = ({ headerText }) => {
   return <header className="Header">{headerText}</header>;
};

export default Header;
