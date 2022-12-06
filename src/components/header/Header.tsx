"use client"

import style from "./header.module.scss";
import Logo from "../../images/svg/Logo.svg";
import class_name from "classnames";
import { useState } from "react";
import Github from "../../images/svg/Github.svg";
import Linkedin from "../../images/svg/Linkedin.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassName = class_name({
    [style.menu]: true,
    [style["menu-open"]]: isOpen,
  });
  const burgerClassName = class_name({
    [style.burger]: true,
    [style["burger-active"]]: isOpen,
  });

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={Logo.src} alt="logotype" />
        <span>Norayr</span>
      </div>
      <nav className={menuClassName}>
        <ul className={style.items}>
          <li className={style.item}>
            <a href="" className={style.link}>
              <span>#</span>
              home
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              <span>#</span>
              works
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              <span>#</span>
              about-me
            </a>
          </li>
          <li className={style.item}>
            <a href="" className={style.link}>
              <span>#</span>
              contacts
            </a>
          </li>
        </ul>
        <ul className={style["header-media"]}>
          <li className={style["header-media-item"]}>
            <a href="#" className={style["header-media-link"]}>
              <img src={Github.src} alt="" />
            </a>
          </li>
          <li className={style["header-media-item"]}>
            <a href="#" className={style["header-media-link"]}>
              <img src={Linkedin.src} alt="" />
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={burgerClassName}
        onClick={() => setIsOpen((is_open) => !is_open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
