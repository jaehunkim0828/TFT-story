import { AppProps } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";

import NavBar from "../components/NavBar";
import '../styles/globals.css';
import { wrapper } from '../store';
import { useEffect } from "react";

function App({ Component, PageProp }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        console.log(router.pathname);
    }, [])

return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"></link>
            </head>
            {router.pathname !== '/' ? <NavBar /> : <div></div>}
            <Component {...PageProp}/>
        </div>
    )
};

export default wrapper.withRedux(App);