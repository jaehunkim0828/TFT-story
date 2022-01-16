import { useDrop } from 'react-dnd';

import style from '../styles/table.module.scss';
import DropChampion from './DropChampion';

export default function Table(props: any) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'champion',
        drop: () => console.log('hello'),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
    }), [])

    const dropsSection = Array(28).fill(0);

    return (
        // <div 
        //     ref={drop}
        //     className={style.table} 
        //     style={{
        //         backgroundColor: isOver ? 'yellow': 'rgb(184, 184, 184)'
        //     }}
        // />
        <div className={style.table}>
            {dropsSection.map((_, i) => {
                if (i < 7 || i > 13 && i < 21) {
                    console.log(i);
                    return <DropChampion key={i}  styles={{ left: '30px'}}/>
                }
                return <DropChampion key={i} styles={{ right: '30px'}}/>
            })}

            <div className={style.triangle}/>
        </div>
    )
}