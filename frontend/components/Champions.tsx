import axios from 'axios';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect, useState } from 'react';

import style from '../styles/champion.module.scss';
import Champion from './Champion';

export default function Champions() {
    const [champions, setChampion] = useState<object[]>([]);


    const getAll = async () => {
        await axios.get('http://localhost:8888/champion')
        .then((champs: any) => setChampion(champs.data));
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <div className={style.championsCards}>
            {champions.map((champ: any, i) => {
                return <Champion key={i} index={i} champ={champ} />
            })}
        </div>
    )
}