import { useEffect } from 'react';
import Select from 'react-select';

import style from '../styles/makeCard.module.scss';

export default function Sugmneted({ augmented, setDeckInfo, deckInfo }: any) {

    const changeaugmented = (e: any, i: number) => {

        setDeckInfo({
            ...deckInfo,
            augmented: {
                ...deckInfo.augmented,
                [`level${i}`]: e
            }
        })
    }

    return (
        <div className={style.sugment}>
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={augmented.level1}
                    onChange={(e) => {
                        changeaugmented(e, 1);
                    }}
                    className={style.select}
                    placeholder='증강 1단계'
                />
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={augmented.level2}
                    onChange={(e) => {
                        changeaugmented(e, 2);
                    }}
                    className={style.select}
                    placeholder='증강 2단계'
                />
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={augmented.level3}
                    onChange={(e) => {
                        changeaugmented(e, 3);
                    }}
                    className={style.select}
                    placeholder='증강 3단계'
                />
            </div>
    )
}