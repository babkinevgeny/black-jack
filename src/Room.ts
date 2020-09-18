import { Player } from "./Player";

export class Room {
    players: any[] = [];
    joinPlayer(player: Player) {
        this.players.push(player.name);
    }
}