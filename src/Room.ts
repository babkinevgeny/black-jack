import { Player } from "./Player";

export class Room {
    players: Player[] = [];
    joinPlayer(player: Player) {
        this.players.push(player);
    };
    switchPlayerStatus(player: Player) {
        player.changeStatus();
    };
    checkReadyPlayers() {
        const readyPlayers = this.players.filter(player => player.isReady);
        const countReadyPlayers = readyPlayers.length;
        return countReadyPlayers > 1;
    };
}