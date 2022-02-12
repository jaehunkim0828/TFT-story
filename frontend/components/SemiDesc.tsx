/* eslint-disable @next/next/no-img-element */
import style from '../styles/cardInfo.module.scss';

import { http } from '../server';
import { useState } from 'react';

export default function SemiDesc({ description }: { description: string}) {
    const [uad, setUad] = useState('up');

    return (
        <div className={style.dropDown}>
            <div className={style.nav}>
                <div>소개</div>
                <img 
                    src={`${http}/images/rest/${uad}.png`} 
                    alt='uad'
                    onClick={() => {
                        if (uad === 'up') {
                            setUad('down');
                            return;
                        }
                        setUad('up');
                    }}
                />
            </div>
            {uad === 'down' ? <div className={style.subContent} >{description}</div> : <div></div>}
        </div>
    )
}