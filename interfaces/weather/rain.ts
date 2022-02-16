export class Rain {
    '1h': number;
    '3h': number;

    constructor (
        h1?: number,
        h3?: number
    ) {
        this['1h'] = h1 || 0;
        this['3h'] = h3 || 0;
    }
}