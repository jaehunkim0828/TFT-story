import { useEffect } from 'react';
import { useDrag } from 'react-dnd';

import style from '../styles/champion.module.scss';

export default function Champion({ champ, key }: { champ: { images: string, cost: number }, key: number }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'champion',
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        }),
    }));

    useEffect(() => {
        if (isDragging) {
            console.log('awsome');
        }
    }, [isDragging])

    return (
        <button 
            ref={drag}
            className={`${style.card}`} 
            style={{ 
                backgroundImage: `url(${champ.images})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: '115%',
                backgroundPosition: 'center',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
            onKeyPress={(e) => console.log(`test`)}
        >
            <div className={style.cost}>{champ.cost}</div>
        </button>
    )
}