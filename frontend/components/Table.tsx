import { AppProps } from 'next/dist/shared/lib/router/router';
import { useDrop } from 'react-dnd';

import style from '../styles/table.module.scss';
import DropChampion from './DropChampion';

export default function Table({ deckInfo, setDeckInfo }: any) {

    const dropsSection = Array(28).fill(0);

    return (
        <div className={style.table}>
            {dropsSection.map((_, i) => {
                if (i < 7 || i > 13 && i < 21) {
                    return <DropChampion deckInfo={deckInfo} setDeckInfo={setDeckInfo} key={i} styles={{ right: '5%'}} indexs={i}/>
                }
                return <DropChampion deckInfo={deckInfo} setDeckInfo={setDeckInfo} key={i} styles={{ left: '5%'}} indexs={i}/>
            })}

            <div className={style.triangle}/>
        </div>
    )
}