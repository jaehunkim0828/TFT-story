import { useEffect, useState } from "react"
import axios from 'axios';

import Card from "./Card";
import style from '../styles/cardList.module.scss';
import { CardLists } from '../type';

export default function CardList() {
    const [decks, setDecks] = useState<any[]>([]);


    const getCardList = async () => {
        const cardList: CardLists = await axios.get('http://localhost:8080/card');
        setDecks(cardList.data);
    }

    useEffect(() => {
        getCardList()
    }, [])
    return (
        <div className={style.cardList}>
            {decks.map((deck, i) => <Card key={i} deck={deck} i={i}/>)}
        </div>
    )
}