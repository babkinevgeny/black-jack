import assert from "assert";
import { Room } from "../src/Room";
import { Player } from "../src/Player";
import { Game } from "../src/Game";

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
    
    it("switch player status", () => {
        const player = new Player("Bob");
        room.switchPlayerStatus(player);
        assert.strictEqual(player.isReady, true, "player should be ready");
    });
    
    it("create game", () => {
        const player1 = new Player("Bob");
        const player2 = new Player("Max");
        room.joinPlayer(player1);
        room.joinPlayer(player2);
        room.switchPlayerStatus(player1);
        
        assert.ok( !room.checkReadyPlayers(), "not all players ready" );
        // assert.ok( !room.game.inProgress() );
        room.switchPlayerStatus(player2);
    
        assert.ok( room.checkReadyPlayers(), "when all players ready" );
        // assert.ok( room.game.inProgress() );
    });
    
    // TODO: 
    // 1. Создать игру с игроками, которые прожали "Готов"
    
    
    
});