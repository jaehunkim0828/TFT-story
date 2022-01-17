import { AppProps } from "next/dist/shared/lib/router/router";

import NavBar from "../components/NavBar";
import '../styles/globals.css';
import { wrapper } from '../store';

function App({ Component, PageProp }: AppProps) {
return (
        <div>
            <NavBar />
            <Component {...PageProp}/>
        </div>
    )
};

export default wrapper.withRedux(App);