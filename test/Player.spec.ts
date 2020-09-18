import assert from "assert";
import { Player } from "../src/Player";

describe("Player", () => {

    let player!: Player;
    beforeEach(() => {
        player = new Player("Bob");
    });
    
    it("create player", () => {        
        assert.strictEqual(player.name, "Bob", "player.name should be equal Bob");
    });
    
    it("player is ready", () => {
        player.changeStatus();
        assert.strictEqual(player.isReady, true, "player.isReady should be true");
    });
    
});