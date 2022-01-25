import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Champions from "./Champions";
import style from '../styles/makeCard.module.scss';
import Table from "./Table";
import TraitCount from "./TraitCount";

function FinalDeck({ champions }: any) {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.container}>
                <div className="table-trait">
                    <TraitCount />
                    <Table />
                </div>
                <Champions champions={champions}/>
            </div>
        </DndProvider>
    );
}

export default FinalDeck;