import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';

import style from '../styles/table.module.scss';
import { RootState } from '../store/reducers';
import { useState } from 'react';



export default function DropChampion({ styles, indexs }: { styles: object, indexs: number }) {
    const { image } = useSelector((state: RootState) => state.championImgReducer);
    const [isImage, setIsImage] = useState(false);
    const [boxImg, setBoxImg] = useState('');

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'champion',
        drop: () => {
            setBoxImg(image);
            setIsImage(true);
        },
        collect: monitor => ({
        isOver: !!monitor.isOver(),
        }),
    }), [image])

    return (
        <div key={indexs}className={style.dropCard} style={{...styles,background: isImage ? `url(${boxImg}) 50% 50%` : 'gray' }}>
            <div ref={drop} className={style.dropChamp}>
                {isOver && (
                    <div 
                        className={style.overCurser}
                    >
                    </div>
                )}
            </div>
        </div>
    )
}