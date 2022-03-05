/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useEffect, useState } from "react"

import { http } from '../server';
import style from '../styles/cardInfo.module.scss';

export default function SemiTraits({ traits }: { traits: string }) {
    const [traitsData, setTraits] = useState<any[]>([]);

    useEffect(() => {
        const traitresult: any[] = [];
        traits.split(' > ').map( async(trait: string) => {
            const traitArr = trait.split(' ');
            if (traitArr[0]) {
                traitresult.push({ trName: traitArr[0], trImage: http + `/images/traits/${traitArr[0]}.svg`, count: traitArr[1] });
            };
        } )
        setTraits(traitresult);
    }, [traits])
    return (
        <div className={style.traits}>
            {
                traitsData.map((tr: any, i: number) => (
                    <div className={ style.traitRow } key={i}>
                        <div>
                            <img className={ style.traitImage } src={tr.trImage} alt='trait'/>
                        </div>
                        <div>{tr.trName}</div>
                        <div className={ style.count }>{tr.count}</div>
                    </div>
                ))    
            }
        </div>
    )
}