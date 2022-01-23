/* eslint-disable @next/next/no-img-element */
import style from '../styles/cardList.module.scss';

import { CardItem} from '../type';

export default function Card({key, deck}: CardItem) {
    return (
        <div className={style.card} key={key}>
            <img className={style.cardImage}src={deck.image} alt='deck-image'/>
            <div>
                <div className={style.name}>{deck.name}</div>
                <div className={style.trait}>
                    {deck.trait.split(' , ').map((item, i) => <div key={i}>#{item}</div>)}
                </div>
                <div>설명: {deck.description}</div>
            </div>
        </div>
    )
}