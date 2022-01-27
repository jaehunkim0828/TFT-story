import axios from 'axios';
import React, { ReactText, useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

import style from '../styles/makeCard.module.scss';

export default function DeckInfo({ champions }: any) {
    // lv3, lv4, lv5, lv6, lv7, augmented, title, images, description

    const [deckInfo, setDeckInfo] = useState({
        title: '',
        description: '',
        argumented: '',
        main: '',
        lv3: '',
        lv4: '',
        lv5: '',
        lv6: '',
        lv7: '',
        images: '',
    });

    const [mainChamp, setMainChamp] = useState('선택하기');
    const [filterChamps, setfilteringChamps] = useState([]);
    const [isName, setIsName] = useState(false);


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
            images: info.images
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
            console.log(deckInfo.main);
            setIsName(true);
            setfilteringChamps(final);
            return;
        }
        return setIsName(false);
    }, [deckInfo.main])

    useEffect(() => {

    }, [])


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
            {/* 
                이미지는 db에서 불러오기 
                path: /lvimage
                method: get
                lv.map 이미지 펼쳐주기 
                이미지 tag -> button
            */}
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
                    }
                    )
                        :
                    champions.map((info: any, i: number) => {
                        return <button onClick={() => onCheckImage(info)} className={style.name} key={i}>{info.name}</button>
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
            <div className={style.sugment}>
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={[
                        { value: '계산된 패배', label: '계산된 패배', color: '#00B8D9', isFixed: true },
                        { value: '지배', label: '지배', color: '#0052CC' },
                        { value: '아이템 꾸러미 I', label: '아이템 꾸러미 I', color: '#5243AA' },
                        { value: '허수아비 전선', label: '허수아비 전선', color: '#FF5630', isFixed: true },
                    ]}
                    onChange={(e) => console.log(e)}
                    className={style.select}
                    placeholder='증강 1단계'
                />
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={[
                        { value: '부익부', label: '부익부', color: '#00B8D9', isFixed: true },
                        { value: '고대의 기록 보관소', label: '고대의 기록 보관소', color: '#0052CC' },
                        { value: '대사 촉진제', label: '대사 촉진제', color: '#5243AA' },
                        { value: '추방자 II', label: '추방자 II', color: '#FF5630', isFixed: true },
                    ]}
                    onChange={(e) => console.log(e)}
                    className={style.select}
                    placeholder='증강 2단계'
                />
                <Select 
                    closeMenuOnSelect={false}
                    isMulti
                    options={[
                        { value: '큰손', label: '큰손', color: '#00B8D9', isFixed: true },
                        { value: '숲의 부적', label: '숲의 부적', color: '#0052CC' },
                        { value: '추방자 III', label: '추방자 III', color: '#5243AA' },
                        { value: '품격있는 쇼핑', label: '품격있는 쇼핑', color: '#FF5630', isFixed: true },
                    ]}
                    onChange={(e) => console.log(e)}
                    className={style.select}
                    placeholder='증강 1단계'
                />
            </div>
            <div>lv3</div>
            <div>lv4</div>
            <div>lv5</div>
            <div>lv6</div>
            <div>lv7</div>
        </div>
    )
};