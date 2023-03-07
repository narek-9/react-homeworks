import { FC } from "react";
import "./Footer.css";

interface FooterProps {
   footerText: string;
}

const Footer: FC<FooterProps> = ({ footerText }) => {
   return <footer className="Footer">{footerText}</footer>;
};

export default Footer;
