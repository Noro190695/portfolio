import style from './forms.module.scss';
import class_name from 'classnames';

interface IProps {
    url: string
}

export const ContactForm = ({url}: IProps) =>{
    return (
        <form className={class_name(style.form)}>
            <input type="text" name='subject' placeholder='Name' className={class_name(style.nofull)}/>        
            <input type="email" name='email' placeholder='Email' className={class_name(style.nofull)}/>        
            <input type="text" name='subject' placeholder='Subject' className={class_name(style.full)}/>    
            <textarea name="message" placeholder='Message' className={class_name(style.full)}></textarea>    
            <button className='btn'>Send</button>
        </form>
    )
}