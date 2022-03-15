/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"

import httpImage, { http } from '../server';
import style from '../styles/cardInfo.module.scss';

export default function SemiTraits({ traits, traitBack }: { traits: string, traitBack: any }) {
    const [traitsData, setTraits] = useState<any[]>([]);

    useEffect(() => {
        const result: any[] = [];
        const traitresult: any[] = [];
        traits.split(' > ').map( async(trait: string) => {
            const traitArr = trait.split(' ');
            if (traitArr[0]) {
                traitresult.push({ trName: traitArr[0], trImage: http + `/images/traits/${traitArr[0]}.svg`, count: traitArr[1] });
            };
        })
        traitresult.map(trait => {
            traitBack.map((e: { name: string, background: string }) => {
                if (e.name === trait.trName) {
                    result.push({ ...trait, back: e.background});
                    return;
                };
            })
        })
        setTraits(result);
    }, [traits]);


    return (
        <div className={style.traits}>
            {
                traitsData.map((tr: any, i: number) => (
                    <div className={ style.traitRow } key={i}>
                        <div className={ style.imgBackground}style={{ backgroundImage: `url(${httpImage(tr.back)})`}}>
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