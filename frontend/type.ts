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

export type TraitColor = {
    "one": 3,
    "two": 1 | 3,
    "three": 1 | 2 | 3,
    "four": 1 | 3 | 4,
    "five": 1 | 2 | 3 | 4,
}

export type TraitsCount = {
    '경호대': { count: 0 | 2 | 4 | 6 | 8 , color: TraitColor},
    '난동꾼': { count: 0 | 2 | 4 | 6 | 8 , color: TraitColor},
    '변형술사': { count: 0 | 1 , color: TraitColor},
    '저격수': { count: 0 | 2 | 4 | 6 , color: TraitColor},
    '비전마법사': { count: 0 | 2 | 4 | 6 | 8 , color: TraitColor},
    '도전자': { count: 0 | 2 | 4 | 6 | 8 , color: TraitColor},
    '암살자': { count: 0 | 2 | 4 | 6 , color: TraitColor},
    '쌍발총': { count: 0 | 2 | 3 | 4 | 5 , color: TraitColor},
    '강화술사': { count: 0 | 2 | 3 | 4 | 5 , color: TraitColor},
    '거신': { count: 0 | 2 , color: TraitColor},
    '타격대': { count: 0 | 2 | 4 | 6 , color: TraitColor},
    '학자': { count: 0 | 2 | 4 | 6 , color: TraitColor},
    '혁신가': { count: 0 | 3 | 5 | 7 , color: TraitColor},
    '경쟁자': { count: 0 | 1 , color: TraitColor},
    '고물상': { count: 0 | 2 | 4 | 6 , color: TraitColor},
    '대식가': { count: 0 | 1 , color: TraitColor},
    '돌연변이': { count: 0 | 3 | 5 | 7 , color: TraitColor},
    '마법공학': { count: 0 | 2 | 4 | 6 | 8 , color: TraitColor},
    '범죄도시': { count: 0 | 3 | 5 | 7 , color: TraitColor},
    '사교계': { count: 0 | 1 | 2 | 3 | 5 , color: TraitColor},
    '시계태엽': { count: 0 | 2 | 4 | 6 , color: TraitColor},
    '연미복': { count: 0 | 3 | 5 | 7 , color: TraitColor},
    '요들': { count: 0 | 1 , color: TraitColor},
    '요들군주': { count: 0 | 1 , color: TraitColor},
    '용병': { count: 0 | 3 | 5 | 7 , color: TraitColor},
    '집행자': { count: 0 | 2 | 4 , color: TraitColor},
    '화학공학': { count: 0 | 3 | 5 | 7 | 9 , color: TraitColor},
    '흑막': { count: 0 | 1 , color: TraitColor},
}

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

export type Item = {
    image: string,
    com1: number,
    com2: number,
    desc: string,
    id: number,
    name: string,
}

export type AxiosChamp = { images: string, cost: number, id: number, name: string };