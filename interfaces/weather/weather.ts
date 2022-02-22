export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
    iconUrl: string;

    constructor (
        id?: number,
        main?: string,
        description?: string,
        icon?: string,
        iconUrl?: string
    ) {
        this.id = id || 0;
        this.main = main || '';
        this.description = description || '';
        this.icon = icon || '';
        this.iconUrl = iconUrl || '';
    }
}