import axios from "axios";
import { useEffect, useState } from "react";

import DeckInfo from "../components/DeckInfo";
import FinalDeck from "../components/FinalDeck";

export default function MakeCard() {
    const [champions, setChampion] = useState<object[]>([]);


    const getAll = async () => {
        await axios.get('http://localhost:8888/champion')
        .then((champs: any) => {
            setChampion(champs.data)
        });
    }

    useEffect(() => {
        getAll();
    }, [])
    return (
        <div>
            <DeckInfo champions={champions}/>
            <FinalDeck champions={champions}/>
        </div>
    )
}