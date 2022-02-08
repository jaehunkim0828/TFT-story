import axios from 'axios';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect, useState } from 'react';

import style from '../styles/champion.module.scss';
import Champion from './Champion';

export default function Champions({ champions }: any) {

    return (
        <div className={style.championsCards}>
            {champions.sort((a: any, b: any) => a.cost - b.cost).map((champ: any, i: number) => {
                return <Champion key={i} index={i} champ={champ} />
            })}
        </div>
    )
}