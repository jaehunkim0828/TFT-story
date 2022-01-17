import style from '../styles/traitCount.module.scss';

export default function Trait({trait}: {trait: { name: string, count: number }}) {
    return (
        <div className={style.trait}>
            <div>{trait.name}</div>
            <div>{trait.count}</div>
        </div>
    )
}