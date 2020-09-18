export class Player {
    name: string;
    isReady: boolean = false;
    constructor( name: string ) {
        this.name = name;
    };
    changeStatus() {
       this.isReady = true; 
    }
}