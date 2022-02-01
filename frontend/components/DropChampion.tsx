import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

import style from '../styles/table.module.scss';
import { RootState } from '../store/reducers';
import { countUp } from '../store/actions/traitAct';
import { countUpChamp } from '../store/actions/numberOfChampAct';



export default function DropChampion({ styles, indexs, setDeckInfo, deckInfo }: { styles: object, indexs: number, deckInfo: any, setDeckInfo: any }) {
    const dispatch = useDispatch();
    const { image, id } = useSelector((state: RootState) => state.championImgReducer);
    const [isImage, setIsImage] = useState(false);
    const [boxImg, setBoxImg] = useState('');

    const getchampionTraits = async () => {
        return await axios.get(`http://localhost:8080/champion/traits/${id}`)
        .then(({ data }) => {
            console.log(deckInfo);
            console.log(deckInfo.final.filter((champ: string) => champ.endsWith(`${id}`)));
            if (deckInfo.final.filter((champ: string) => champ.endsWith(`${id}`)).length) {
                return;
            }
            data.map((trait: string) => {
                dispatch(countUp(trait));
            })
        });
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'champion',
        drop: async () => {
            await getchampionTraits();
            dispatch(countUpChamp());
            setDeckInfo({
                ...deckInfo,
                final: [
                    ...deckInfo.final,
                    `${indexs} ${id}`
                ]
            })
            setBoxImg(image);
            setIsImage(true);
        },
        collect: monitor => ({
        isOver: !!monitor.isOver(),
        }),
    }), [image, deckInfo])

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