import logo from "../../image/medicine-loga.svg";
import s from "./heder.module.scss";
import { CustomLink } from "../custom-nav-link.tsx/custum-link";
import { Link } from "react-router-dom";

export const Heder = () => {
  return (
    <header className={s.heder}>
      <Link to="/">
        <img src={logo} height={50} width={50} alt="logo" />
      </Link>
      <div>
        <CustomLink to="/">Pharmacies</CustomLink>
        <CustomLink to="/shoping">Sopping cart</CustomLink>
      </div>
    </header>
  );
};
