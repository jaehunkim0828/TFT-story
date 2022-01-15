import { AppProps } from "next/dist/shared/lib/router/router";

import NavBar from "../components/NavBar";
import '../styles/globals.css';

export default function App({ Component, PageProp }: AppProps) {
return (
        <div>
            <NavBar />
            <Component {...PageProp}/>
        </div>
    )
};