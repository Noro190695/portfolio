import style from "./about.module.scss";
import Image from "next/image";
import class_name from "classnames";
import person from "../../images/person-2.png";
export const About = () => {
  return (
    <section className={class_name(style.about)}>
      <div className={class_name(style.info)}>
        <div className={class_name(style.desc)}>
          <p>Hello, i’m Elias!</p>
          <p>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <button className='btn'>Read more {"->"}</button>
      </div>
      <div className={class_name(style.img)}>
        <Image
          src={person.src}
          width={person.width}
          height={person.height}
          alt='person'
        />
      </div>
    </section>
  );
};
