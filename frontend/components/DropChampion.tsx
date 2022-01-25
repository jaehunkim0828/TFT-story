import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

import style from '../styles/table.module.scss';
import { RootState } from '../store/reducers';
import { countUp } from '../store/actions/traitAct';
import { countUpChamp } from '../store/actions/numberOfChampAct';



export default function DropChampion({ styles, indexs }: { styles: object, indexs: number }) {
    const dispatch = useDispatch();
    const { image, id } = useSelector((state: RootState) => state.championImgReducer);
    const [isImage, setIsImage] = useState(false);
    const [boxImg, setBoxImg] = useState('');

    const getchampionTraits = async () => {
        return await axios.get(`http://localhost:8888/champion/${id}`)
        .then(({ data }) => {
            console.log(data);
            data.map((trait: string) => {
                console.log(trait);
                dispatch(countUp(trait))
            })
        });
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'champion',
        drop: async () => {
            await getchampionTraits();
            dispatch(countUpChamp());
            setBoxImg(image);
            setIsImage(true);
        },
        collect: monitor => ({
        isOver: !!monitor.isOver(),
        }),
    }), [image])

    return (
        <div key={indexs}className={`${style.dropCard} ${style.dropImageSize}`} style={{...styles,backgroundImage: isImage ? `url(${boxImg})` : 'gray', backgroundColor: !isImage ?  'gray' : 'none'}}>
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