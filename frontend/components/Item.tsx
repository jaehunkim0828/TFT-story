/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from 'react-redux';

import { seleteItem } from '../store/actions/selectedItem';
import style from '../styles/item.module.scss';
import { changeValue } from '../store/actions/dropValue';
import { Modal } from "./Modal";
import axios from "axios";
import { http } from "../server";

export default function Item({ item }: any) {
    const dispatch = useDispatch();
    const [ishover, setIshover] = useState<boolean>(false);
    const [comImage, setComImage] = useState<any>({
        com1: 'none',
        com2: 'none'
    });

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        }),
    }));

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
    }

    const getCombination = async (com: number | null) => {
        if (!com) return 'none';
        const image = await axios.get(http + `/item/com/${com}`);
        return image.data.image;
    }


    useEffect(() => {
        if (isDragging) {
            dispatch(seleteItem([item.image, item.id, item.name]));
            dispatch(changeValue('item'));
        }
    }, [isDragging]);

    useEffect(() => {
        console.log(item);
        getCombination(item.com1).then(image => setComImage((prev: any) => {
            return {
                ...prev,
                com1: image
            }
        }));
        getCombination(item.com2).then(image => setComImage((prev: any) => {
            return {
                ...prev,
                com2: image
            }
        }));
    } ,[ishover])


    return (
        <div className={style.itemContainer}>
            <div 
                ref={drag}
                onMouseOver={() => setIshover(true)}
                onMouseLeave={() => setIshover(false)}
            >
                <img className={style.item}src={item.image} alt='item'/>
            </div>
            {ishover && <Modal name={itemName(item.name)} com1={comImage.com1} com2={comImage.com2} desc={item.desc}/>}
        </div>
    )
}