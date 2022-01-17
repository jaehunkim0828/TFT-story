import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';

import style from '../styles/champion.module.scss';
import { seleteChamp } from '../store/actions/selectedChamp';

export default function Champion({ champ, index }: { champ: { images: string, cost: number }, index: number }) {
    const dispatch = useDispatch();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'champion',
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        }),
    }));

    const chooseBorderColor = (i: number) => {
        if (i === 1) {   
            return '3px solid #9D9D9D'
        }
        if (i === 2) {
            return '3px solid #24A19C'
        }
        if (i === 3) {
            return '3px solid #1C6DD0'
        }
        if (i === 4) {
            return '3px solid #F94892'
        } else {
            return '3px solid #ffc600'
        }
    }

    const chooseBackground = (i : number) => {
        if (i === 1) {   
            return '#9D9D9D'
        }
        if (i === 2) {
            return '#24A19C'
        }
        if (i === 3) {
            return '#1C6DD0'
        }
        if (i === 4) {
            return '#F94892'
        } else {
            return '#ffc600'
        }
    }

    useEffect(() => {
        if (isDragging) {
            dispatch(seleteChamp(champ.images));
        }
    }, [isDragging]);

    return (
        <button 
            ref={drag}
            className={`${style.card}`} 
            key={index}
            style={{ 
                backgroundImage: `url(${champ.images})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: '115%',
                backgroundPosition: 'center',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                border: chooseBorderColor(champ.cost),
            }}
        >
            <div className={style.cost} style={{background: chooseBackground(champ.cost)}}>{champ.cost}</div>
        </button>
    )
}