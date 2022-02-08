import axios from "axios";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

import SemiChamps from "../components/SemiChamps";
import CardAugmented from "../components/CardAugmented";
import SemiTraits from "../components/SemiTraits";

export default function CardInfo() {
    const router = useRouter();

    const initialCardInfo = {
        augmented: '',
        champions: '',
        items: '',
        level3: '',
        level4: '',
        level5: '',
        level6: '',
        level7: '',
        traits: '',
    }

    const initialThumbInfo = {
        name: '',
        trait: '',
        image: '',
        description: '',
    }

    const [cardInfo, setInfo] = useState(initialCardInfo);
    const [thumbInfo, setThumbInfo] = useState(initialThumbInfo);
    const [champions, setChampions] = useState<object[]>([]);

    const getIdDeckInfo = async () => {
        const cardIds = localStorage.getItem('cardId');
        if (!cardIds) return router.push('/main');
        const { card, thumb } = JSON.parse(cardIds);
        const championsData = await axios.get(`http://localhost:8080/champion`);
        const cardData = await axios.get(`http://localhost:8080/card/${card}`);
        const thumbData = await axios.get(`http://localhost:8080/card/thumb/${thumb}`);
        setChampions(championsData.data);
        setInfo(cardData.data[0]);
        setThumbInfo(thumbData.data[0]);
    }

    useEffect(() => {
        getIdDeckInfo();
    }, [])
    
    return (
        <div>
            <div>{thumbInfo.name}</div>
            <div>{thumbInfo.description}</div>
            <div>{cardInfo.traits}</div>
            <SemiTraits traits={cardInfo.traits} />
            <CardAugmented augmented={cardInfo.augmented}/>
            <SemiChamps champions={champions} level={cardInfo.level3} name={'레벨 3'}/>
            <SemiChamps champions={champions} level={cardInfo.level4} name={'레벨 4'}/>
            <SemiChamps champions={champions} level={cardInfo.level5} name={'레벨 5'}/>
            <SemiChamps champions={champions} level={cardInfo.level6} name={'레벨 6'}/>
            <SemiChamps champions={champions} level={cardInfo.level7} name={'레벨 7'}/>
        </div>
    )
}