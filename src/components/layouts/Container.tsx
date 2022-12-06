import style from "./style/layouts.module.scss";
import { Header } from "../header/Header";
interface Props {
  children: JSX.Element[] | JSX.Element;
}
export const Container = ({ children }: Props) => {
  return (
    <div className={style.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
