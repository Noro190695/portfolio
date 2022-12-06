import style from "./quotes.module.scss";
import class_name from "classnames";
import { QuotesIcon } from "../svg/Icons";
export const Quotes = () => {
  const quotesClassName = class_name({
    [style.quotes]: true,
  });
  return (
    <div className={quotesClassName}>
      <div className={class_name(style.container)}>
        <div className={class_name(style.content)}>
          <span className={class_name(style["quotes-icon"])}>
            <QuotesIcon />
          </span>
          <p>With great power comes great electricity bill</p>
          <span className={class_name(style["quotes-icon"])}>
            <QuotesIcon />
          </span>
        </div>
        <div className={class_name(style.author)}>
          <p>- Dr. Who</p>
        </div>
      </div>
    </div>
  );
};
