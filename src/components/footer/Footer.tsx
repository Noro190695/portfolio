import style from './footer.module.scss';
import class_name from 'classnames';

export const Footer = () => {
    return (
        <footer className={class_name(style.footer)}>
            <p>&copy; Copyright 2022</p>
        </footer>
    )
}