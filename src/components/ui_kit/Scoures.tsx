import style from './styles/scoures.module.scss'

interface IScoures {
    size?: number
    padding?: number
}
export const Scoures = ({size=120, padding = 20}: IScoures) => {
    return(
        <div className={style.block} style={
            {width: `${size}px`,height: `${size}px`, padding: `${padding}px`}
        }>
            <div className={style.item} style={
                {height: `calc(100% - ${padding}px)`}
            }>
                <span style={{height: `calc(50% - ${(padding / 2 - 1)}px)`, bottom: `${padding - 1}px`}}></span>
            </div>
            <div className={style.item} style={
                {height: `calc(100% - ${padding}px)`}
            }>
                <span style={{height: `calc(50% - ${(padding / 2 - 2)}px)`, top: `${padding - 1}px`}}></span>
            </div>
        </div>
    )
}
interface ISympleScoure {
    size?: number
    radius?: number
}
export const SympleScoure = ({size=120, radius=0}: ISympleScoure) => {
    return(
        <div className={style['simple-scure']} style={
            {width: `${size}px`,height: `${size}px`, borderRadius: `${radius}px`}
        }>
        </div>
    )
}
