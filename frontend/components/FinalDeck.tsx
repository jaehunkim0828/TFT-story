import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Champions from "./Champions";
import style from '../styles/makeCard.module.scss';
import Table from "./Table";
import TraitCount from "./TraitCount";
import { useEffect, useState } from 'react';
import { RootState } from '../store/reducers';
import { useSelector } from 'react-redux';
import FinalItems from './FinalItems';
import Items from './Items';


function FinalDeck({ champions, deckInfo, setDeckInfo, items }: any) {
    
    const { member } = useSelector((state: RootState) => state.numberOfChampReducer);
    const [ isChamp, setIsChamp ] = useState(true);

    const onClick = (data: string): void => {
        data === 'champ' ? setIsChamp(true) : setIsChamp(false);
    }

    useEffect(() => {
    }, [member])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.finalContainer}>
                <div className="table-trait">
                    <TraitCount deckInfo={deckInfo} setDeckInfo={setDeckInfo} />
                    <Table deckInfo={deckInfo} setDeckInfo={setDeckInfo} />
                </div>
                <div className={style.btnContainer}>
                    <button className={style.btn} onClick={() => onClick('champ')}>챔피언</button>
                    <button className={style.btn} onClick={() => onClick('item')}>아이템</button>
                </div>
                { isChamp ? <Champions champions={champions}/> : <Items items={items}/>}
            </div>
        </DndProvider>
    );
}

export default FinalDeck;