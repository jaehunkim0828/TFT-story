/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import style from '../styles/cardList.module.scss';
import { CardItem } from '../type';
import httpImage from '../server';

export default function Card({i, deck}: CardItem) {
    const router = useRouter();


    const goCardInfo = () => {
        localStorage.setItem('cardId', JSON.stringify({ card: deck.card_id, thumb: deck.id }));
        router.push('/cardInfo');
    }

    return (
        <div 
            className={style.card} 
            key={i}
            onClick={() => goCardInfo()}
        >
            <img className={style.cardImage}src={httpImage(deck.image)} alt='deck-image'/>
            <div>
                <div className={style.name}>{deck.name}</div>
                <div className={style.trait}>
                    {deck.trait.split(' > ').map((item, i) => {
                        if (i < 3) {
                            return (<div key={i}>#{item}</div>);
                        }
                    })}
                </div>
                <div>설명: {`${deck.description.substring(0, 31)}...`}</div>
            </div>
        </div>
    )
}