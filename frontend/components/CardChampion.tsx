import axios from 'axios';
import { useEffect, useState } from 'react';
import { http } from '../server';
import style from '../styles/table.module.scss';

export default function CardChampion({ styles, champId, items }: { styles: object, champId?: string, items?: Array<string> }) {
    const [imageSrc, setImage] = useState('');
    const [itemSrc, setItem] = useState<string[]>([]);
    const [bool, setbool] = useState(false);

    useEffect(() => {
        const getChampionImage = async () => {
            if (champId) {
                const imagePath = await axios.get(http + `/champion/${champId}`);
                setImage(http + imagePath.data.images);
                setbool(true);
                if(items) {
                    items.map( async (id: string) => {
                        const itemImage = await axios.get(http + `/item/${id}`);
                        setItem((prev: string[]) => {
                            return [
                                ...prev,
                                itemImage.data.image
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
            <div className={style.items}>{itemSrc ? itemSrc.map((item, i) => (<img className={style.item} key={i} src={item} alt='item' />)): ''}</div>
        </div>
    )
}