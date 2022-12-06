import style from "./skills.module.scss";
import class_name from "classnames";
import { Dots } from '../ui_kit/Dots';
import { Scoures, SympleScoure } from '../ui_kit/Scoures';

export const Skills = () => {
  return (
    <section className={class_name(style.skills)}>
      <div className={class_name(style.bg)}><Dots x={5} y={5} /></div>
      <div className={class_name(style.bg)}><Dots x={5} y={5} /></div>
      <div className={class_name(style.bg)}><SympleScoure size={86}/></div>
      <div className={class_name(style.bg)}><SympleScoure size={52}/></div>
      <div className={class_name(style.bg)}><Scoures size={113} padding={28} /></div>
      <div className={class_name(style["skills-block"])}>
        <div className={class_name(style["languages"], style["skills-item"])}>
          <h3 className={class_name(style["skills-item__title"])}>Languages</h3>
          <div className={class_name(style["skills-item__content"])}>
            <span>
              Armenian<span className="unic-text">(C2)</span>
            </span>
            <span>
              Russian<span className="unic-text">(B2)</span>
            </span>
            <span>
              English<span className="unic-text">(B1)</span>
            </span>
          </div>
        </div>
      </div>
      <div className={class_name(style["skills-block"])}>
        <div className={class_name(style.other, style["skills-item"])}>
          <h3 className={class_name(style["skills-item__title"])}>Other</h3>
          <div className={class_name(style["skills-item__content"])}>
            <span> Git </span>
            <span>Docker</span>
            <span>Docker-ompose</span>
            <span>Webpack</span>
            <span>Apache</span>
            <span>Nginx</span>
            <span>Google cloud</span>
          </div>
        </div>
      </div>
      <div className={class_name(style["skills-block"])}>
        <div className={class_name(style["backend"], style["skills-item"])}>
          <h3 className={class_name(style["skills-item__title"])}>Frontend</h3>
          <div className={class_name(style["skills-item__content"])}>
            <span>Html</span>
            <span>Css</span>
            <span>Sass</span>
            <span>Less</span>
            <span>Tailwind</span>
            <span>JavaScript</span>
            <span>ES5-ES2020</span>
            <span>React-JS</span>
            <span>Redux</span>
            <span>Next-JS</span>
            <span>TypeScript</span>
          </div>
        </div>
        <div className={class_name(style["frontend"], style["skills-item"])}>
          <h3 className={class_name(style["skills-item__title"])}>Backend</h3>
          <div className={class_name(style["skills-item__content"])}>
            <span>Html</span>
            <span>Css</span>
            <span>Sass</span>
            <span>Less</span>
            <span>Tailwind</span>
            <span>JavaScript</span>
            <span>ES5-ES2020</span>
            <span>React-JS</span>
            <span>Redux</span>
            <span>Next-JS</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};
