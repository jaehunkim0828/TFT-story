import React, { useEffect, useState } from 'react';

import style from '../styles/makeCard.module.scss';
import SemiDeck from './SemiDeck';
import Augmneted from './Augmented';

type Augment = {
    level1: object[],
    level2: object[],
    level3: object[],
}

export default function DeckInfo({ champions, augmented, deckInfo, setDeckInfo }: any) {

    const [mainChamp, setMainChamp] = useState('선택하기');
    const [filterChamps, setfilteringChamps] = useState([]);
    const [isName, setIsName] = useState(false);
    const [augment, setAugment] = useState<Augment>({
        level1: [],
        level2: [],
        level3: [],
    })

    const [championList, SetChampionList] = useState([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setDeckInfo({
            ...deckInfo,
            [name]: value,
        })
    }

    const onCheckImage = (info: any) => {
        setDeckInfo({
            ...deckInfo,
            images: info.thumb
        })
        setMainChamp(info.name);
    }

    useEffect(() => {
        if (deckInfo.main !== '') {
            const final = champions.map((champ: any) => {
                if (champ.name.includes(deckInfo.main)) {
                    return champ;
                }
                return;
            })
            setIsName(true);
            setfilteringChamps(final);
            return;
        }
        return setIsName(false);
    }, [deckInfo.main])

    useEffect(() => {
        const lv1: object[] = [];
        const lv2: object[] = [];
        const lv3: object[] = [];
        
        setAugment((prev: Augment) => {
            augmented.map((item: { name: string, description: string, level: number}) => {
                if (item.level === 1) {
                    lv1.push({
                        value: item.name,
                        label: item.name
                    })
                    return;
                }
                if (item.level === 2) {
                    lv2.push({
                        value: item.name,
                        label: item.name,
                    })
                    return;
                }
                lv3.push({
                    value: item.name,
                    label: item.name,
                })
            })
            return {
                ...prev,
                level1: lv1,
                level2: lv2,
                level3: lv3,
            }
        });
    }, [augmented])

    useEffect(() => {
        const champList = champions.map(({ id, name }: { id: number, name: string } ) => {
            return { value: id, label: name };
        })
        SetChampionList(champList);
    }, [champions])

    return (
        <div className={style.deck}>
            <div className={style.contents}>
                <div>덱 이름: </div>
                <input
                    autoComplete="off"
                    className={style.inputs}
                    value={deckInfo.title}
                    name="title"
                    onChange={onChange}
                />
            </div>
            <div className={`${style.contents} ${style.description}`}>
                <div>덱 소개: </div>
                <textarea
                    autoComplete="off"
                    className={`${style.inputs} ${style.descriptionInput}`}
                    value={deckInfo.description}
                    name="description"
                    onChange={(e) => onChange(e)}
                />
            </div>
            <div className={style.mainName}>
                <div className={style.contents}>
                    <div>메인 챔피언:</div>
                    <input
                        autoComplete="off"
                        className={style.inputs}
                        value={deckInfo.main}
                        name="main"
                        onChange={(e) => {
                            onChange(e);
                        }}
                    />
                    <div className={style.seletedChamp}>{mainChamp}</div>
                </div>
                <div className={style.nameList}>
                    {isName ? filterChamps.map((champ: any, i: number) => {
                        if (champ) {
                            return <button onClick={() => onCheckImage(champ)} className={style.name} key={i}>{champ.name}</button>
                        }
                    })
                        :
                    champions.map((info: any, i: number) => {
                        return <button onClick={() => onCheckImage(info)} className={style.name} key={i}>{info.name}</button>
                    })}
                </div>
            </div>
            <Augmneted augmented={augment} deckInfo={deckInfo} setDeckInfo={setDeckInfo}/>
            <SemiDeck champions={championList} setDeckInfo={setDeckInfo} deckInfo={deckInfo}/>
        </div>
    )
};