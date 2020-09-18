import { Player } from "./Player";

enum GameStatus {Waiting, Process, Finished};

export class Game {
    status: number;
    players: Player[] = [];
    constructor(players: Player[]) {
        this.status = GameStatus.Waiting;
        this.players = players.filter(player => player.isReady);
    }
}