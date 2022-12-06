import style from './contact.module.scss';
import class_name from 'classnames';
import { ContactForm } from '../forms/ContactForm';

export const Contact = () => {
    return (
        <section className={class_name(style.contact)}>
            <ContactForm url=''/>
        </section>
    )
}