export type CardLists = {
    data: any[],
}

export interface CardItem {
    key: number,
    deck: { 
        id: number, 
        trait: string, 
        name: string, 
        image: string, 
        description: string
    }
}