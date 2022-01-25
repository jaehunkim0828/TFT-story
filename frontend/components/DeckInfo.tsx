import axios from 'axios';
import React, { useEffect, useState } from 'react';

import style from '../styles/makeCard.module.scss';

export default function DeckInfo({ champions }: any) {

    const [deckName, setDeckName] = useState({
        title: '',
        description: '',
        main: '',
    });

    const [finalChamps, setFinal] = useState([]);
    const [isName, setIsName] = useState(false);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setDeckName({
            ...deckName,
            [name]: value,
        })
    }

    useEffect(() =>  {
        console.log('test');
    }, [])

    useEffect(() => {
        if (deckName.main !== '') {
            const final = champions.map((champ: any) => {
                if (champ.name.includes(deckName.main)) {
                    console.log('test');
                    return champ.name;
                }
                return;
            })
            console.log(deckName.main);
            setIsName(true);
            setFinal(final);
            return;
        }
        return setIsName(false);
    }, [deckName.main])


    return (
        <div className={style.deck}>
            <div>
                <div>Title: </div>
                <input 
                    value={deckName.title}
                    name="title"
                    onChange={onChange}
                />
            </div>
            <div>
                <div>간단한 덱설명: </div>
                <input 
                    value={deckName.description}
                    name="description"
                    onChange={onChange}
                />
            </div>
            {/* 
                이미지는 db에서 불러오기 
                path: /lvimage
                method: get
                lv.map 이미지 펼쳐주기 
                이미지 tag -> button
            */}
            <div className={style.mainName}>
                <div>메인 챔피언:</div>
                <input 
                    value={deckName.main}
                    name="main"
                    onChange={(e) => {
                        onChange(e);
                    }}
                />
                <div className={style.nameList}>
                    {isName ? finalChamps.map((champ: any, i: number) => {
                        if (champ) {
                            return <button className={style.name} key={i}>{champ}</button>
                        }
                    }
                    )
                        :
                    champions.map((info: any, i: number) => {
                        return <button className={style.name} key={i}>{info.name}</button>
                    })}
                </div>
            </div>
            {/* 
                이미지는 db에서 불러오기 
                path: /sugmented
                method: get
                sugmented.map 이미지 펼쳐주기 
                이미지 tag -> button
            */}
            <div>증강체</div>
            {/* 이건 좀 생각해보는걸로 아직은 */}
            <div>lv3</div>
            <div>lv4</div>
            <div>lv5</div>
            <div>lv6</div>
            <div>lv7</div>
        </div>
    )
};