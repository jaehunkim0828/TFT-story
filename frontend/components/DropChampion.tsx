/* eslint-disable @next/next/no-img-element */
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

import style from '../styles/table.module.scss';
import { RootState } from '../store/reducers';
import { countDown, countUp } from '../store/actions/traitAct';
import { countDownChamp, countUpChamp } from '../store/actions/numberOfChampAct';
import { initialItemName } from '../type';



export default function DropChampion({ styles, indexs, setDeckInfo, deckInfo }: { styles: object, indexs: string, deckInfo?: any, setDeckInfo?: any }) {
    const dispatch = useDispatch();
    const { image, id } = useSelector((state: RootState) => state.championImgReducer);
    const itemImage =  useSelector((state: RootState) => state.itemReducer).image;
    const itemName =  useSelector((state: RootState) => state.itemReducer).name;
    const itemId =  useSelector((state: RootState) => state.itemReducer).id;
    const { value } = useSelector((state: RootState) => state.dropValueReducer);

    const [isImage, setIsImage] = useState(false);
    const [boxImg, setBoxImg] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const [itemSinerge, setItemSinerge] = useState<string[]>([]);

    const getchampionTraits = async () => {
        return await axios.get(`http://localhost:8080/champion/traits/${id}`)
        .then(({ data }) => {
            const values: number[] = Object.values(deckInfo.final);
            if (values.filter((champId: number) => champId === id).length) {
                return;
            }
            data.map((trait: string) => {
                dispatch(countUp(trait));
            })
        });
    }

    const getSinerge = (id: string) => {
        if ('1' === id) return '고물상';
        if ('7' === id) return '경호대';
        if ('8' === id) return '난동꾼';
        if ('13' === id) return '도전자';
        if ('14' === id) return '돌연변이';
        if ('21' === id) return '범죄도시';
        if ('25' === id) return '사교계';
        if ('32' === id) return '시계태엽';
        if ('33' === id) return '마법공학';
        if ('34' === id) return '암살자';
        if ('36' === id) return '용병';
        if ('40' === id) return '저격수';
        if ('42' === id) return '타격대';
        if ('46' === id) return '집행자';
        if ('51' === id) return '학자';
        if ('53' === id) return '화학공학';
        if ('54' === id) return '힘의성배';
        return 'none';
    }

    const removeChampionTraits = async () => {
        const values: number[] = Object.values(deckInfo.final);
        if (values.filter((value: number) => value === deckInfo.final[indexs]).length < 2) {
            await axios.get(`http://localhost:8080/champion/traits/${deckInfo.final[indexs]}`)
            .then(({ data }) => {
                data.map((trait: string) => {
                    dispatch(countDown(trait));
                })
                itemSinerge.map((trait: string) => {
                    dispatch(countDown(trait));
                })
            })
            return;
        }
        return;
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ['champion','item'],
        drop: async () => {
            if (value === 'item') {
                const keys: string[] = Object.keys(deckInfo.final);
                if (!keys.filter((index: string) => index === indexs.toString()).length) {
                    return window.alert('챔피언을 먼저 옮겨주세요!');
                }
                setItems([...items, itemImage]);
                if (itemName && getSinerge(itemName) !== 'none') {
                    dispatch(countUp(getSinerge(itemName)));
                    setItemSinerge(prev => [...prev, getSinerge(itemName)])
                    dispatch(countUpChamp());
                }
                
                setDeckInfo({
                    ...deckInfo,
                    items: {
                        ...deckInfo.items,
                        [indexs] :  [ ...deckInfo.items[indexs]?? '', itemId]
                    }
                })
                return;
            }
            await getchampionTraits();
            dispatch(countUpChamp());
            setDeckInfo({
                ...deckInfo,
                final: {
                    ...deckInfo.final,
                    [indexs]: id
                }
            })
            setBoxImg(image);
            setIsImage(true);
        },
        collect: monitor => {
            return {
        isOver: !!monitor.isOver(),
        }},
    }), [image, deckInfo, itemImage])

    const remove = async () => {
        setIsImage(false);
        await removeChampionTraits();
        delete deckInfo.items[indexs];
        delete deckInfo.final[indexs];
        setDeckInfo({
            ...deckInfo,
            final: deckInfo.final,
            items: deckInfo.items,
        });
        setItemSinerge([]);
        setBoxImg('');
        setItems([]);
        dispatch(countDownChamp());
    }

    return (
        <div 
            key={indexs}
            className={`${style.dropCard} ${style.dropImageSize}`} 
            style={{...styles,backgroundImage: isImage ? `url(${boxImg})` : 'none', backgroundColor: !isImage ?  'gray' : 'gray'}}
            onDoubleClick={() => {
                if(isImage && window.confirm('정말 삭제하시겠습니까?')) {
                    remove();
                }
            }}
        >
            <div ref={drop} className={style.dropChamp}>
                {isOver && (
                    <div 
                        className={style.overCurser}
                    >
                    </div>
                )}
            </div>
            <div className={style.items}>{items.map((item, i) => (<img className={style.item} key={i} src={item} alt='item' />))}</div>
        </div>
    )
}