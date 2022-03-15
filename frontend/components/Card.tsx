/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import style from '../styles/cardList.module.scss';
import { CardItem } from '../type';
import httpImage, { http } from '../server';
import axios from 'axios';
import { useEffect, useState } from 'react';
import parseDate from '../util/data';

export default function Card({i, deck, changeIndex}: CardItem) {
    const router = useRouter();

    const [isUp, setIsUp] = useState(false);

    const goCardInfo = () => {
        localStorage.setItem('cardId', JSON.stringify({ card: deck.card_id, thumb: deck.id }));
        router.push('/cardInfo');
    }

    
    const deleteDeck = async () => {
        try {
            if(window.confirm('덱을 삭제하시겠습니까?')) {
                if (window.prompt('카드 비밀번호를 입력해주세요.') === deck.password.toString()) {
                    await axios.delete(http + `/card/${deck.id}`);
                    changeIndex(i);
                    return;
                }
                return window.alert('비밀번호가 틀립니다.');
            }
        } catch(e) {
            window.alert(e);
        }
    }

    return (
        <div 
            className={style.cardContainer}
            style={{ height: isUp ? '35%' : '20%'}}
        >
            <div 
                className={style.card} 
                key={i}
                onClick={() => goCardInfo()}
                onDoubleClick={deleteDeck}
            >
                <img className={style.cardImage}src={httpImage(deck.image)} alt='deck-image'/>
                <div className={style.cardContent}>
                    <div className={style.name}>{deck.name}</div>
                    <div className={style.trait}>
                        {deck.trait.split(' > ').map((item, i) => {
                            if (i < 3) {
                                return (<div key={i}>#{item}</div>);
                            }
                        })}
                    </div>
                    <div>설명: {deck.description.split('').length > 30 ? `${deck.description.substring(0, 31)}...` : deck.description}</div>
                    <div className={style.time}>{parseDate(deck.created_at)}</div>
                </div>
            </div>
            {isUp ? 
                <div 
                    className={style.option}
                    onClick={deleteDeck} 
                >
                    <div>덱 삭제하기</div>
                    <img src={httpImage('/images/rest/delete.png')} alt='delete'/>
                </div>
                    : 
                <></>
            }
            <div className={style.uadRow}>
                <img 
                    className={style.uad} 
                    src={isUp ?  httpImage('/images/rest/up.png') : httpImage('/images/rest/down.png')} 
                    alt='button' 
                    onClick={() => {
                        if (isUp) {
                            setIsUp(false);
                            return;
                        }
                        setIsUp(true);
                    }}
                />
            </div>
        </div>
    )
}