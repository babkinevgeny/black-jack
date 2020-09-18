import assert from "assert";
import { Game } from "../src/Game";
import { Player } from "../src/Player";
import { Room } from "../src/Room";

describe("Game", () => {

    let game!: Game;
    let room!: Room;
    let player1!: Player;
    let player2!: Player;
    beforeEach(() => {
        room = new Room();
        player1 = new Player("Bob");
        player2 = new Player("Max");
        room.joinPlayer(player1);
        room.joinPlayer(player2);
        room.switchPlayerStatus(player1);
        room.switchPlayerStatus(player2);
        game = new Game(room.players);
    });
    
    it("create game", () => {
        assert.strictEqual(game.status, 0, "Статус игры должен быть в процессе");
    });
    
    it("check players", () => {
        const arePlayersMoreThanOne = game.players.length > 1;
        assert.strictEqual(arePlayersMoreThanOne, true, "Кол-во готовых игроков должно быть > 1");
    });
    
});