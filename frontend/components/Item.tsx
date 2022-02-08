/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from 'react-redux';

import { seleteItem } from '../store/actions/selectedItem';
import style from '../styles/item.module.scss';
import { changeValue } from '../store/actions/dropValue';

export default function Item({ item }: any) {
    const dispatch = useDispatch();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        }),
    }));


    useEffect(() => {
        if (isDragging) {
            dispatch(seleteItem([item.image, item.id, item.name]));
            dispatch(changeValue('item'));
        }
    }, [isDragging]);

    return (
        <div ref={drag}>
            <img className={style.item}src={item.image} alt='item'/>
        </div>
    )
}