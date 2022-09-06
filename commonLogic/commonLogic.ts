export function convertKelvinToFahrenheit(temp: number) {
    const convTemp = (temp - 273.15) * (9 / 5) + 32;
    return `${convTemp.toString().split('.')[0]}\xB0F`;
}

export function convertMMtoInch(mm: number) {
    if (mm === undefined || mm === 0) {
        return 'No rain';
    } else {
        const conversion = (mm / 25.4).toFixed(2);
        if (mm > 0 && parseFloat(conversion) < 0.5) {
            return 'Rain: < 0.5 in'
        } else {
            return `Rain: ${conversion} in`;
        }
    }
}

export function parseDate(dt: number) {
    const splitDate = new Date(dt * 1000).toDateString().split(' ').slice(0, 3);
    splitDate[2] = parseInt(splitDate[2]).toString();
    return splitDate.join(' ');
}