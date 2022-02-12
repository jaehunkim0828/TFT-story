import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import DeckInfo from "../components/DeckInfo";
import FinalDeck from "../components/FinalDeck";
import style from '../styles/makeCard.module.scss';
import { countUpDeckMake } from '../store/actions/saveDeck';
import { RootState } from '../store/reducers';
import { countReset } from "../store/actions/traitAct";
import { DeckInfoType } from "../type";

export default function MakeCard() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { count } = useSelector((state: RootState) => state.saveDeckReducer);

    const [champions, setChampion] = useState<object[]>([]);
    const [augmented, setaugmented] = useState<object[]>([]);
    const [items, setItems] = useState<object[]>([]);

    const makeCardVaildate = (deck: DeckInfoType) => {
        if (deck.lv3.length < 3) {
            window.alert('레벨 3에서 챔피언 3명을 선택해주세요.');
            return false;
        }
        if (deck.lv4.length < 4) {
            window.alert('레벨 4에서 챔피언 4명을 선택해주세요.');
            return false;
        }
        if (deck.lv5.length < 5) {
            window.alert('레벨 5에서 챔피언 5명을 선택해주세요.');
            return false;
        }
        if (deck.lv6.length < 6) {
            window.alert('레벨 6에서 챔피언 6명을 선택해주세요.');
            return false;
        }
        if (deck.lv7.length < 7) {
            window.alert('레벨 7에서 챔피언 7명을 선택해주세요.');
            return false;
        }
        if (Object.keys(deck.final).length === 0) {
            window.alert('최종덱에 챔피언을 넣어주세요');
            return false;
        }

        return true;
    }

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
        await axios.get('http://15.165.15.185:8080/champion')
        .then((champs: any) => {
            setChampion(champs.data);
        });
    }
    const getaugmented = async () => {
        const sugmente = await axios.get('http://15.165.15.185:8080/augmented');
        setaugmented(sugmente.data);
    }

    const getItem = async () => {
        const items = await axios.get('http://15.165.15.185:8080/item');
        setItems(items.data);
    }

    const save = async () => {
        try{
            const password = window.prompt('덱 비밀번호를 입력해주세요. 4자리', '1234');
            if (password && password.length === 4) {
                deckInfo.password = password;
                console.log(deckInfo);
                if (makeCardVaildate(deckInfo)) {
                    await axios.post('http://15.165.15.185:8080/card', deckInfo);
                    dispatch(countUpDeckMake());
                    router.push('/main');
                }
                return;
            }
            return;
        } catch(error: any) {
            window.alert(error);
        }
    }

    useEffect(() => {
        getAll();
        getaugmented();
        getItem();
    }, [])

    useEffect(() => {
        setDeckInfo(initialDeckInfo);
        dispatch(countReset());
    }, [count])

    return (
        <div className={style.container}>
            <DeckInfo champions={champions} augmented={augmented} deckInfo={deckInfo} setDeckInfo={setDeckInfo}/>
            <FinalDeck champions={champions} deckInfo={deckInfo} setDeckInfo={setDeckInfo} items={items}/>
            <Button 
                text={'저장하기'} 
                onClick={save}
            
            />
        </div>
    )
}