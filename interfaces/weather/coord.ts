export class Coord {
    lon: number;
    lat: number;

    constructor (
        lat?: number,
        lon?: number
    ) {
        this.lat = lat || 0;
        this.lon = lon || 0;
    }
}