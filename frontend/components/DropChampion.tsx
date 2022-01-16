import { useDrop } from 'react-dnd';
import style from '../styles/table.module.scss';

export default function DropChampion({ styles }: any) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'champion',
    drop: () => console.log('hello'),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])

    return (
        <div className={style.dropCard} style={styles}>
            <div ref={drop} className={style.dropChamp}>
                {isOver && (
                    <div 
                        className={style.overCurser}
                    />
                )}
            </div>
        </div>
    )
}