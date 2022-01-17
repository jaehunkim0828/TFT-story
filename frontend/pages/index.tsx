import { useRouter } from "next/router";

import Champions from "../components/Champions";
import style from '../styles/home.module.scss';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Table from "../components/Table";
import TraitCount from "../components/TraitCount";

function Home() {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.container}>
                <div className="table-trait">
                    <TraitCount />
                    <Table />
                </div>
                <Champions />
            </div>
        </DndProvider>
    );
}

export default Home;