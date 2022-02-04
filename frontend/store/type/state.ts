export type SelectImg = {
    image: string,
    id: number, 
}

export type ImgAction = {
    type: string,
    payload: [string, number],
}

export type Trait = {
    type: string,
    payload: '고물상' |
    '대식가' |
    '돌연변이' |
    '범죄 조직' |
    '사교계' |
    '시계태엽' |
    '아카데미' |
    '요들' |
    '요들 군주' |
    '용병' |
    '자매' |
    '제국' |
    '집행자' |
    '포근' |
    '화학공학' |
    '강화술사' |
    '거신' |
    '경호대' |
    '난동꾼' |
    '도전자' |
    '변형술사' |
    '봉쇄자' |
    '비전 마법사' |
    '쌍발총' |
    '암살자' |
    '저격수' |
    '학자' |
    '혁신가'
}

export type TraitState = {
    trait: {
        '고물상': number,
        '대식가': number,
        '돌연변이': number,
        '범죄 조직':number,
        '사교계': number,
        '시계태엽': number,
        '아카데미': number,
        '요들': number,
        '요들 군주':number,
        '용병': number,
        '자매': number,
        '제국': number,
        '집행자': number,
        '포근': number,
        '화학공학': number,
        '강화술사': number,
        '거신': number,
        '경호대': number,
        '난동꾼': number,
        '도전자': number,
        '변형술사': number,
        '봉쇄자': number,
        '비전 마법사':number,
        '쌍발총': number,
        '암살자': number,
        '저격수': number,
        '학자': number,
        '혁신가': number,
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