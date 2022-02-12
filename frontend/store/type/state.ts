export type SelectImg = {
    image: string,
    name?: string,
    id: number, 
}

export type ImgAction = {
    type: string,
    payload: [string, number, string],
}

export type Trait = {
    type: string,
    payload: '경호대' |
    '난동꾼' |
    '변형술사' |
    '저격수' |
    '비전마법사' |
    '도전자' |
    '암살자' |
    '쌍발총' |
    '강화술사' |
    '거신' |
    '타격대' |
    '학자' |
    '혁신가' |
    '경쟁자' |
    '고물상' |
    '대식가' |
    '돌연변이' |
    '마법공학' |
    '범죄도시' |
    '사교계' |
    '시계태엽' |
    '연미복' |
    '요들' |
    '요들군주' |
    '용병' |
    '집행자' |
    '화학공학' |
    '흑막' 
}

export type TraitState = {
    trait: {
        '경호대': number,
        '난동꾼': number,
        '변형술사': number,
        '저격수':number,
        '비전마법사': number,
        '도전자': number,
        '암살자': number,
        '쌍발총': number,
        '강화술사':number,
        '거신': number,
        '타격대': number,
        '학자': number,
        '혁신가': number,
        '경쟁자': number,
        '고물상': number,
        '대식가': number,
        '돌연변이': number,
        '마법공학': number,
        '범죄도시': number,
        '사교계': number,
        '시계태엽': number,
        '연미복': number,
        '요들':number,
        '요들군주': number,
        '용병': number,
        '집행자': number,
        '화학공학': number,
        '흑막': number,
    },
}

export type NumberOfChampState = {
    member: number,
}

export type NumberOfChamp = {
    type: string,
}

export type DropValue = {
    value: 'champ' | 'item' | '',
}

export type DeckMake = {
    count: number,
}

export type DeckMakeAct = {
    type: string,
}

export type CurrentDeckAct = {
    type: string,
    payload: number,
}

export type CurrentDeck = {
    id: number,
}