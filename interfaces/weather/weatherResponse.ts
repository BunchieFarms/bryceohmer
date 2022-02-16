import { Clouds } from "./clouds";
import { Coord } from "./coord";
import { Main } from "./main";
import { Rain } from "./rain";
import { Snow } from "./snow";
import { Sys } from "./sys";
import { Weather } from "./weather";
import { Wind } from "./wind";

export class WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    rain: Rain;
    snow: Snow;
    dt: number;
    timezone: number;
    id: number;
    sys: Sys;
    name: string;

    constructor (
        coord?: Coord,
        weather?: Weather[],
        base?: string,
        main?: Main,
        wind?: Wind,
        clouds?: Clouds,
        rain?: Rain,
        snow?: Snow,
        dt?: number,
        timezone?: number,
        id?: number,
        sys?: Sys,
        name?: string
    ) {
        this.coord = coord || new Coord();
        this.weather = weather || [new Weather()];
        this.base = base || '';
        this.main = main || new Main();
        this.wind = wind || new Wind();
        this.clouds = clouds || new Clouds();
        this.rain = rain || new Rain();
        this.snow = snow || new Snow();
        this.dt = dt || 0;
        this.timezone = timezone || 0;
        this.id = id || 0;
        this.sys = sys || new Sys();
        this.name = name || '';
    }
}