import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";

import DeckInfo from "../components/DeckInfo";
import FinalDeck from "../components/FinalDeck";
import style from '../styles/makeCard.module.scss';

export default function MakeCard() {
    const router = useRouter();

    const [champions, setChampion] = useState<object[]>([]);
    const [augmented, setaugmented] = useState<object[]>([]);
    const [items, setItems] = useState<object[]>([]);

    // lv3, lv4, lv5, lv6, lv7, augmented, title, images, description
    const initialDeckInfo = {
        title: '',
        description: '',
        augmented: {
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
        final: {},
        items: {},
        password: '',
        traits: {},
    }
    const [deckInfo, setDeckInfo] = useState(initialDeckInfo);

    const getAll = async () => {
        await axios.get('http://localhost:8080/champion')
        .then((champs: any) => {
            setChampion(champs.data);
        });
    }
    const getaugmented = async () => {
        const sugmente = await axios.get('http://localhost:8080/augmented');
        setaugmented(sugmente.data);
    }

    const getItem = async () => {
        const items = await axios.get('http://localhost:8080/item');
        setItems(items.data);
    }

    const save = async () => {
        const password = window.prompt('덱 비밀번호를 입력해주세요. 4자리', '1234');
        if (password && password.length === 4) {
            deckInfo.password = password;
            const saveData = await axios.post('http://localhost:8080/card', deckInfo);
            console.log(saveData);
            router.push('/main');
            setDeckInfo(initialDeckInfo);
            return;
        }
        return;
    }

    useEffect(() => {
        getAll();
        getaugmented();
        getItem();
    }, [])

    return (
        <div className={style.container}>
            <DeckInfo champions={champions} augmented={augmented} deckInfo={deckInfo} setDeckInfo={setDeckInfo}/>
            <FinalDeck champions={champions} deckInfo={deckInfo} setDeckInfo={setDeckInfo} items={items}/>
            {/* 버튼 누르면 redux 와 deckinfo data 삭제하기 */}
            <Button 
                text={'저장하기'} 
                onClick={save}
            
            />
        </div>
    )
}