export class Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;

    constructor (
        temp?: number,
        feels_like?: number,
        temp_min?: number,
        temp_max?: number,
        pressure?: number,
        humidity?: number,
        sea_level?: number,
        grnd_level?: number
    ) {
        this.temp = temp || 0
        this.feels_like = feels_like || 0
        this.temp_min = temp_min || 0
        this.temp_max = temp_max || 0
        this.pressure = pressure || 0
        this.humidity = humidity || 0
        this.sea_level = sea_level || 0
        this.grnd_level = grnd_level || 0
    }
}