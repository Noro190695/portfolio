import style from "./banner.module.scss";
import Image from "next/image";
import class_name from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Dots } from "../ui_kit/Dots";
import { Scoures } from "../ui_kit/Scoures";
import person from "../../images/person.png";
import Typewriter from "typewriter-effect";
export const Banner = () => {
  const bannerClassName = class_name({
    [style.banner]: true,
  });
  return (
    <section className={bannerClassName}>
      <div className={class_name(style["banner-content"])}>
        <h1>
          Hello, I&apos;m  a
          <span className="unic-text"> full-stack developer.</span>
        </h1>
        <p>
          I can create a site of any complexity from 0 to the end,{" "}
          <span className="unic-text">with backend and frontend.</span>
        </p>
        <button className="btn">
          Read more {'->'}
        </button>
      </div>
      <div className={class_name(style["banner-img"])}>
        <div className={class_name(style["banner-img-bg"])}>
          <Scoures size={155} padding={38} />
        </div>
        <div className={class_name(style["banner-img-bg"])}>
          <Dots />
        </div>
        <Image
          src={person.src}
          width={person.width}
          height={person.height}
          alt="person 1"
        />
        <p className={class_name(style["banner-img__desc"])}>
          Currently working on <span>Portfolio</span>
        </p>
      </div>
    </section>
  );
};
