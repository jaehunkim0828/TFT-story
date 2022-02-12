import { Key } from "react"

export type CardLists = {
    data: Deck[],
}

export type Deck = { 
    id: number, 
    trait: string, 
    name: string, 
    image: string, 
    description: string
    card_id: number,
    password: number,
    created_at: string,
}

export interface CardItem {
    i: number,
    deck: Deck
    changeIndex: (index: number) => void,
}

export type Champions = {
    
}

export const initialItemName = [
    '경호대',
    '난동꾼',
    '변형술사',
    '저격수',
    '비전마법사',
    '도전자',
    '암살자',
    '쌍발총',
    '강화술사',
    '거신',
    '타격대',
    '학자',
    '혁신가',
    '경쟁자',
    '고물상',
    '대식가',
    '돌연변이',
    '마법공학',
    '범죄도시',
    '사교계',
    '시계태엽',
    '연미복',
    '요들',
    '요들군주',
    '용병',
    '집행자',
    '화학공학',
    '흑막',
]

export type DeckInfoType = {
    title: string,
    description: string,
    augmented: {
        level1: string[],
        level2: string[],
        level3: string[],
    },
    main: string,
    lv3: string[],
    lv4: string[],
    lv5: string[],
    lv6: string[],
    lv7: string[],
    images: string,
    final: {
        [key: string]: string
    },
    items: {
        [key: string]: string,
    },
    password: string,
    traits: {
        [key: string]: string,
    }
}

export type CardChampionProps = { 
    styles: object, 
    champId?: string, 
    items?: Array<string> 
}

export type AxiosChamp = { images: string, cost: number, id: number, name: string };