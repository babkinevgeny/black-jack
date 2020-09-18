import assert from "assert";
import { Player } from "../src/Player";

describe("Player", () => {
    
    it("create player", () => {
        
        const player = new Player("Bob");
        
        assert.strictEqual(player.name, "Bob", "player.name should be equal Bob");
    });
    
});