import { useRouter } from "next/router";

import Champions from "../components/Champions";
import style from '../styles/home.module.scss';

function Home() {

    return (
        <div className={style.container}>
            <Champions />
        </div>
    );
}

export default Home;