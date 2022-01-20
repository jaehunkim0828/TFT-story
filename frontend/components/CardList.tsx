import { useState } from "react"
import Card from "./Card";

import style from '../styles/cardList.module.scss';

export default function CardList() {
    const [decks, setDecks] = useState([
        {
            id: 1,
            name: '트리스타나 무한 궁',
            image: 'https://user-images.githubusercontent.com/67530239/150344597-c54a154d-aae1-442a-88d5-a650b402f499.jpeg',
            trait: ['#돌연변이',  '#저격수'],
            description: '트리스타나에게 돌연변이 시너지와 블루를 줘서 무한으로 궁을쓰게 해주는 덱입니다.'
        },
        {
            id: 2,
            name: '비전 마법사 럭스덱',
            image: 'https://user-images.githubusercontent.com/67530239/150344591-76cec056-9e6d-4868-a3b7-20a14dd92faa.jpeg',
            trait: ['#아카데미', '#비전 마법사'],
            description: '럭스에게 블루, 무대, 보건을 넣어주어 딜을 극대화 시켜서 게임을 이기는 플랜입니다.'
        }
    ]);

    return (
        <div className={style.cardList}>
            {decks.map((deck, i) => <Card key={i} deck={deck}/>)}
        </div>
    )
}