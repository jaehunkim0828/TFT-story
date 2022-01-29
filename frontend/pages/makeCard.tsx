import axios from "axios";
import { useEffect, useState } from "react";

import DeckInfo from "../components/DeckInfo";
import FinalDeck from "../components/FinalDeck";

export default function MakeCard() {
    const [champions, setChampion] = useState<object[]>([]);
    const [sugmented, setSugmented] = useState<object[]>([]);

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

    useEffect(() => {
        getAll();
        getSugmented();
    }, [])
    return (
        <div>
            <DeckInfo champions={champions} sugmented={sugmented}/>
            <FinalDeck champions={champions}/>
        </div>
    )
}