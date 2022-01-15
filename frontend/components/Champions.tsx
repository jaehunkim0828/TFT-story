import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import style from '../styles/champion.module.scss';

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
                console.log(champ.images);
                return <div 
                    className={`${style.card}`} 
                    key={i} 
                    style={{ 
                        backgroundImage: `url(${champ.images})`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: '100%'
                    }}
                >
                    <div className={style.cost}>{champ.cost}</div>
                </div>
            })}
        </div>
    )
}