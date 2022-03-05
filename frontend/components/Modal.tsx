/* eslint-disable @next/next/no-img-element */
import httpImage from '../server';
import style from '../styles/modal.module.scss';

export function Modal({name, cost, desc, com1, com2}: { name: string, cost?: number, desc?: string, com1?: string, com2?: string }) {
    return(
        <div className={style.modal}>
            <div className={style.title}>
                <div>{name}</div>
                <div>{cost}</div>
            </div>
            <div className={style.content}>
                {com1 && com1 !== 'none' ? <img src={httpImage(com1)} alt={com1}/> : <div></div>}
                <div>{com1 && com1 !== 'none' ? '+' : '제작 불가'}</div>
                {com2 && com2 !== 'none' ? <img src={httpImage(com2)} alt={com2}/> : <div></div>}
            </div>
            <div className={style.desc}>{desc}</div>
        </div>
    )
}