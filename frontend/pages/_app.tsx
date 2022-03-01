/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import Head from 'next/head';

import NavBar from "../components/NavBar";
import '../styles/globals.css';
import { wrapper } from '../store';

function App({ Component, PageProp }: AppProps) {
    const router = useRouter();

return (
        <div>
            <Head>
                <meta name="naver-site-verification" content="49afacdecf8c4c263f4bbb1f42dd748ffd97470b" />
                <meta name="google-site-verification" content="llLheOnhRrWfahqIyDL0Nm9H3mhPy8i8J-a1y4TNTA4" />
                <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Jua&family=Nanum+Gothic+Coding&display=swap" rel="stylesheet"></link>
            </Head>
            {router.pathname !== '/' ? <NavBar /> : <div></div>}
            <Component {...PageProp}/>
        </div>
    )
};

export default wrapper.withRedux(App);