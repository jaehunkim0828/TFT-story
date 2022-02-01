import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";

import DeckInfo from "../components/DeckInfo";
import FinalDeck from "../components/FinalDeck";
import style from '../styles/makeCard.module.scss';

export default function MakeCard() {
    const [champions, setChampion] = useState<object[]>([]);
    const [sugmented, setSugmented] = useState<object[]>([]);
    const [items, setItems] = useState<object[]>([]);

    // lv3, lv4, lv5, lv6, lv7, augmented, title, images, description
    const [deckInfo, setDeckInfo] = useState({
        title: '',
        description: '',
        sugmented: {
            level1: [],
            level2: [],
            level3: [],
        },
        main: '',
        lv3: [],
        lv4: [],
        lv5: [],
        lv6: [],
        lv7: [],
        images: '',
        final: [],
    });

    const getAll = async () => {
        await axios.get('http://localhost:8080/champion')
        .then((champs: any) => {
            setChampion(champs.data);
        });
    }
    const getSugmented = async () => {
        const sugmente = await axios.get('http://localhost:8080/sugmented');
        setSugmented(sugmente.data);
    }

    const getItem = async () => {
        const items = await axios.get('http://localhost:8080/item');
        setItems(items.data);
    }

    useEffect(() => {
        getAll();
        getSugmented();
        getItem();
    }, [])

    useEffect(() => {
        console.log(items);
    }, [items])

    return (
        <div className={style.container}>
            <DeckInfo champions={champions} sugmented={sugmented} deckInfo={deckInfo} setDeckInfo={setDeckInfo}/>
            <FinalDeck champions={champions} deckInfo={deckInfo} setDeckInfo={setDeckInfo} items={items}/>
            {/* 버튼 누르면 redux 와 deckinfo data 삭제하기 */}
            <Button text={'저장하기'} href={'/main'}/>
        </div>
    )
}