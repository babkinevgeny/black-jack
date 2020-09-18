import assert from "assert";
import { Room } from "../src/Room";
import { Player } from "../src/Player";

describe("Room", () => {
    
    let room!: Room;
    beforeEach(() => {
        room = new Room();
    });
    
    it("create room", () => {
        assert.strictEqual(room.players.length, 0, "by default room should be empty");
    });
    
    it("join room", () => {
        const player = new Player("Bob");
        room.joinPlayer(player);
        assert.strictEqual(room.players.length, 1, "number of players in room should be in increased");
    });
    
});