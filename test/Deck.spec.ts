import assert from "assert";
import { Deck } from "../src/Deck";

describe("Deck", () => {

    let deck!: Deck;
    beforeEach(() => {
        deck = new Deck();
    });
    
    it("create deck", () => {
        
        assert.strictEqual(deck.cards.length, 36, "Колода должна содержать 36 карт");
    });
    
    it("shuffle deck", () => {
        const oldCards = [...deck.cards];
        
        deck.shuffleDeck();
        
        let result = false;
        
        for(let i = 0; i < oldCards.length; i++) {
            if (oldCards[i].suit != deck.cards[i].suit && oldCards[i].rank != deck.cards[i].rank) {
                result = true;
                break;
            }
        }
        
        assert.strictEqual(result, true, "Колода должна быть перемешана");
    });
    
});