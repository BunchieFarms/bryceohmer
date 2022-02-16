export class Wind {
    speed: number;
    deg: number;
    gust: number;

    constructor (
        speed?: number,
        deg?: number,
        gust?: number
    ) {
        this.speed = speed || 0;
        this.deg = deg || 0;
        this.gust = gust || 0;
    }
}