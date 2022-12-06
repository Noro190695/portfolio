import style from './title.module.scss';
import class_name from 'classnames'

interface IProps {
    title: string,
}

export const Title = ({title}:IProps) => {
    
    return (
        <div className={class_name(style.title)}>
            <h2><span className='unic-text'>#</span>{title}</h2>
            <span className={class_name(style.line)}></span>
        </div>
    )
}