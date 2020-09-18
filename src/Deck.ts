import { Card } from "./Card";


export class Deck {
    cards: Card[] = [];
    suits: string[] = [];
    ranks: string[] = [];
    constructor() {
        this.suits = ['spade', 'diamond', 'club', 'heart'];
        this.ranks = ['6', '7', '8', '9', '10', 'валет', 'дама', 'король', 'туз'];
        
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.ranks.length; j++) {
                const card = new Card(this.suits[i], this.ranks[j]);
                this.cards.push(card);
            }
        }
    };
    
    shuffleDeck() {
        this.cards.sort(() => Math.random() - 0.5); 
    };
}