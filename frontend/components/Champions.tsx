import style from '../styles/champion.module.scss';
import { AxiosChamp } from '../type';
import Champion from './Champion';

export default function Champions({ champions }: { champions: AxiosChamp[]}) {

    return (
        <div className={style.championsCards}>
            {champions.sort((a: any, b: any) => a.cost - b.cost).map((champ: any, i: number) => {
                return <Champion key={i} index={i} champ={champ} />
            })}
        </div>
    )
}