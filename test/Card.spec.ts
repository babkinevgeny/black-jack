import assert from "assert";
import { Card } from "../src/Card";

describe("Card", () => {
    
    it("create card", () => {
        const card = new Card("spade", "10");
        
        assert.strictEqual(card.suit, "spade", "card.suit should be equal spade");
        assert.strictEqual(card.rank, "10", "card.rank should be equal 10");
    });
    
});