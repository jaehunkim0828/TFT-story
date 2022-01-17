import { AppProps } from 'next/dist/shared/lib/router/router';
import { useDrop } from 'react-dnd';

import style from '../styles/table.module.scss';
import DropChampion from './DropChampion';

export default function Table() {

    const dropsSection = Array(28).fill(0);

    return (
        <div className={style.table}>
            {dropsSection.map((_, i) => {
                if (i < 7 || i > 13 && i < 21) {
                    return <DropChampion key={i} styles={{ left: '30px'}} indexs={i}/>
                }
                return <DropChampion key={i} styles={{ right: '30px'}} indexs={i}/>
            })}

            <div className={style.triangle}/>
        </div>
    )
}