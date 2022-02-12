/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { http } from '../server';
import style from '../styles/cardInfo.module.scss';

export default function DropDown({ children, text}: any) {
    const [uad, setUad] = useState('down');

    return (
        <div 
            className={style.dropDown}
            onClick={() => {
                if (uad === 'up') {
                    setUad('down');
                    return;
                }
                setUad('up');
            }}
        >
            <div className={style.nav}>
                <div>{text}</div>
                <img 
                    src={`${http}/images/rest/${uad}.png`} 
                    alt='uad'
                />
            </div>
            {uad === 'down' ? <div className={style.subContent}>{children}</div> : <div></div>}
        </div>
    )
}