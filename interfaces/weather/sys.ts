export class Sys {
    country: string;
    sunrise: number;
    sunset: number;

    constructor (
        country?: string,
        sunrise?: number,
        sunset?: number
    ) {
        this.country = country || '';
        this.sunrise = sunrise || 0;
        this.sunset = sunset || 0;
    }
}