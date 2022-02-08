export type CardLists = {
    data: any[],
}

export interface CardItem {
    i: number,
    deck: { 
        id: number, 
        trait: string, 
        name: string, 
        image: string, 
        description: string
        card_id: number,
    }
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
    '범죄조직',
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