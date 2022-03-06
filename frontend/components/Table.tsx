import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

import style from '../styles/table.module.scss';
import CardChampion from './CardChampion';
import DropChampion from './DropChampion';

export default function Table({ deckInfo, setDeckInfo, final, items }: { deckInfo?: any, setDeckInfo?: any, final?: string, items?: string }) {
    const dropsSection = Array(28).fill(0);

    const [champLocation, setchampLocation] = useState<any>([]);
    const [itemLocation, setitemLocation] = useState<any>([]);

    useEffect(() => {
        if (final) {
            final.split(' > ').map((champ: string) => {
                const champLoc = champ.split(' ');
                setchampLocation((prev: any) => {
                    return {
                        ...prev,
                        [champLoc[0]]: champLoc[1],
                    }
                })
            })
            if (items) {
                items.split(' > ').map((item: string) => {
                    const [location, itemId] = item.split(' : ');
                    setitemLocation((prev: any) => {
                        return {
                            ...prev,
                            [location]: itemId.split(' , '),
                        }
                    })
                })
            }
        }
    }, [final])

    return (
        <div className={style.table}>
            {deckInfo ? dropsSection.map((_, i) => {
                if (i < 7 || i > 13 && i < 21) {
                    return <DropChampion deckInfo={deckInfo} setDeckInfo={setDeckInfo} key={i} styles={{ right: '3.35%'}} indexs={`${i}`}/>
                }
                return <DropChampion deckInfo={deckInfo} setDeckInfo={setDeckInfo} key={i} styles={{ left: '3.35%'}} indexs={`${i}`}/>
            }) :
            dropsSection.map((_, i) => {
                if (i < 7 || i > 13 && i < 21) {
                    if (champLocation[i]) {
                        if (itemLocation[i]) return <CardChampion key={i} styles={{ right: '3.35%'}} champId={champLocation[i]} items={itemLocation[i]}/>
                        return <CardChampion key={i} styles={{ right: '3.35%'}} champId={champLocation[i]}/>
                    }
                    return <CardChampion key={i} styles={{ right: '3.35%'}} />
                }
                if (champLocation[i]) {
                    if (itemLocation[i]) return <CardChampion key={i} styles={{ left: '3.35%'}} champId={champLocation[i]} items={itemLocation[i]}/>
                    return <CardChampion key={i} styles={{ left: '3.35%'}} champId={champLocation[i]}/>
                }
                return <CardChampion key={i} styles={{ left: '3.35%'}} />
            })}

            <div className={style.triangle}/>
        </div>
    )
}