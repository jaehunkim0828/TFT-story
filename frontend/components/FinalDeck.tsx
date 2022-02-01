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


function FinalDeck({ champions, deckInfo, setDeckInfo }: any) {
    const [isItem, setIsItem] = useState(false);

    const { member } = useSelector((state: RootState) => state.numberOfChampReducer);

    useEffect(() => {
        if (member > 0) {
            setIsItem(true);
            return;
        }
        setIsItem(false);
    }, [member])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.finalContainer}>
                <div className="table-trait">
                    <TraitCount />
                    <Table deckInfo={deckInfo} setDeckInfo={setDeckInfo} setIsItem={setIsItem}/>
                </div>
                <Champions champions={champions}/>
                {isItem && <FinalItems deckInfo={deckInfo} setDeckinfo={setIsItem}/>}
            </div>
        </DndProvider>
    );
}

export default FinalDeck;