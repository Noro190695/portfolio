import style from './styles/dots.module.scss'

export const Dots = ({x = 5, y = 5, color = '#ABB2BF'}) => {
    const count = Array.from(Array(x * y).keys())
    return(
        <div className={style.dots} style={{width: `${(x - 1) * 15}px`, height: `${(y - 1) * 15}px`}}>
            {count.map(i => {
                return (
                    <span key={(i + Math.random()).toString()} className={style.dot}></span>
                )
            })}
        </div>
    )
}
