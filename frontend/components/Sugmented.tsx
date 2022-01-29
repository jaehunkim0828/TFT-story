import { stringify } from 'querystring';
import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

import style from '../styles/makeCard.module.scss';

export default function Sugmneted({ sugmented, setDeckInfo, deckInfo }: any) {

    const changeSugmented = (e: any) => {

        setDeckInfo({
            ...deckInfo,
            sugmented: {
                ...deckInfo.sugmented,
                level1: e
            }
        })
    }

    useEffect(() => {
        console.log(sugmented);
    }, [sugmented])

    return (
        <div className={style.sugment}>
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={sugmented.level1}
                    onChange={(e) => {
                        changeSugmented(e);
                        console.log(deckInfo);
                    }}
                    className={style.select}
                    placeholder='증강 1단계'
                />
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={sugmented.level2}
                    onChange={(e) => {
                        changeSugmented(e);
                        console.log(deckInfo);
                    }}
                    className={style.select}
                    placeholder='증강 2단계'
                />
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={sugmented.level3}
                    onChange={(e) => {
                        changeSugmented(e);
                        console.log(deckInfo);
                    }}
                    className={style.select}
                    placeholder='증강 1단계'
                />
            </div>
    )
}