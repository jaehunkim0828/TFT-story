/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react';

import { http } from '../server';
import style from '../styles/table.module.scss';
import { CardChampionProps, Item } from '../type';
import { Modal } from './Modal';

export default function CardChampion({ styles, champId, items }: CardChampionProps) {
    const initialItem = {
        image: '',
        name: '',
        com1: 0,
        com2: 0,
        desc: '',
        id: 0,
    };

    const [imageSrc, setImage] = useState('');
    const [itemData, setItem] = useState<Item[]>([]);
    const [bool, setbool] = useState(false);
    const [ishover, setIshover] = useState<{ bool: boolean, i: number }>({ bool: false, i: 0 });
    const [hoverItem, setHoverItem] = useState<Item>(initialItem);
    const [comImage, setComImage] = useState<any>({
        com1: 'none',
        com2: 'none'
    });

    const itemName = (name: string) => {
        if (name === '1') return '고물상';
        if (name === '7') return '경호대';
        if (name === '8') return '난동꾼';
        if (name === '13') return '도전자';
        if (name === '14') return '돌연 변이';
        if (name === '21') return '범죄 도시';
        if (name === '25') return '사교계';
        if (name === '32') return '시계태엽';
        if (name === '33') return '마법 공학';
        if (name === '34') return '암살자';
        if (name === '36') return '용병';
        if (name === '40') return '저격수';
        if (name === '42') return '타격대';
        if (name === '46') return '집행자';
        if (name === '51') return '학자';
        if (name === '53') return '화학공학';
        if (name === '54') return '혁신가';
        return name;
    };

    const getCombination = async (com: number | null) => {
        if (!com) return 'none';
        const image = await axios.get(http + `/item/com/${com}`);
        return image.data.image;
    };

    useEffect(() => {
        getCombination(hoverItem.com1).then(image => setComImage((prev: any) => {
            return {
                ...prev,
                com1: image
            }
        }));
        getCombination(hoverItem.com2).then(image => setComImage((prev: any) => {
            return {
                ...prev,
                com2: image
            }
        }));
    } ,[ishover])

    useEffect(() => {
        const getChampionImage = async () => {
            if (champId) {
                const imagePath = await axios.get(http + `/champion/${champId}`);
                setImage(http + imagePath.data.images);
                setbool(true);
                if(items) {
                    items.map( async (id: string) => {
                        const itemImage = await axios.get(http + `/item/${id}`);
                        setItem((prev: Item[]) => {
                            return [
                                ...prev,
                                itemImage.data
                            ]
                        })
                    })
                }
            }
        }

        getChampionImage();
    }, [champId])

    return (
        <div 
            className={`${style.dropCard} ${style.dropImageSize}`} 
            style={{...styles,backgroundImage: bool ? `url(${imageSrc})` : 'none', backgroundColor: 'gray'}}
        >
            <div className={style.dropChamp}>
            </div>
            <div className={style.items}>
                {itemData.length ? 
                        itemData.map((item, i) => (
                            <div key={i}>
                                <img 
                                    className={style.item}
                                    src={item.image}
                                    alt='item'
                                    onMouseOver={() => {
                                        setIshover({ bool: true, i: i });
                                        setHoverItem(itemData[i]);
                                    }}
                                    onMouseLeave={() => {
                                        setIshover({ bool: false, i: 0 });
                                        setHoverItem(initialItem);
                                    }}
                                />
                                {ishover.bool && ishover.i === i ? <Modal name={itemName(hoverItem.name)} com1={comImage.com1} com2={comImage.com2} desc={item.desc}/>: ''}
                            </div>
                        ))
                    : 
                        ''
                }
            </div>
        </div>
    )
}