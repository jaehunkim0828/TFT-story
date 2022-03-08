import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import style from "../styles/cardList.module.scss";
import { CardLists, Deck } from "../type";

export default function CardList() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [deleteindex, setDeleteIndex] = useState<number>(-1);

  const getCardList = async () => {
    const cardList: CardLists = await axios.get(
      "http://3.34.197.199:8080/card"
    );
    setDecks(cardList.data);
  };

  useEffect(() => {
    getCardList();
  }, []);

  useEffect(() => {
    const newdeck = [];
    for (let i = 0; i < decks.length; i += 1) {
      if (i === deleteindex) continue;
      newdeck.push(decks[i]);
    }
    setDecks(newdeck);
    setDeleteIndex(-1);
  }, [deleteindex]);
  return (
    <div className={style.cardList}>
      {decks.map((deck, i) => (
        <Card key={i} deck={deck} changeIndex={setDeleteIndex} i={i} />
      ))}
    </div>
  );
}
