import axios from 'axios';
import { useEffect, useState } from 'react';

import style from '../styles/champion.module.scss';
import Champion from './Champion';

export default function Champions() {
    const [champions, setChampion] = useState<object[]>([{ name: 'Gargen', cost: 1 }]);


    const getAll = async () => {
        await axios.get('http://localhost:8888')
        .then((champs: any) => setChampion(champs.data));
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <div className={style.championsCards}>
            {champions.map((champ: any, i) => {
                return <Champion key={i} champ={champ} />
            })}
        </div>
    )
}