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
                <title>롤체 스토리</title>
                <link rel='canonical' href="http://tftstory.com" ></link>
                <meta
                    name="description"
                    content="자신만의 덱을 롤체스토리에서 완성해보세요."
                />
                <meta
                    name="og:title"
                    content="롤체스토리"
                />
                <meta
                    name="og:description"
                    content="자신만의 덱을 롤체스토리에서 완성해보세요."
                />
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