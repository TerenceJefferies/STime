import Time from '../src/Time';

describe('Time', () => {
    it('Should return a unix timestamp as a whole number', () => {
        const time = new Time(new Date());

        expect(Number.isInteger(time.toTimestamp())).toBeTruthy();
    });

    it('Should return the day of the month', () => {
        const time = new Time(new Date('04-06-2020'));

        expect(time.getDay()).toEqual(6);
    });

    it('Should return the month', () => {
        const time = new Time(new Date('04-06-2020'));

        expect(time.getMonth()).toEqual(4);
    });

    it('Should return the year', () => {
        const time = new Time(new Date('04-06-2020'));

        expect(time.getYear()).toEqual(2020);
    });

    it('Should return the seconds', () => {
        const date = new Date();
        const fixture = date.getSeconds();

        const time = new Time(date);

        expect(time.getSeconds()).toEqual(fixture);
    });

    it('Should return the minutes', () => {
        const date = new Date();
        const fixture = date.getMinutes();

        const time = new Time(date);

        expect(time.getMinutes()).toEqual(fixture);
    });

    it('Should return the hours', () => {
        const date = new Date();
        const fixture = date.getHours();

        const time = new Time(date);

        expect(time.getHours()).toEqual(fixture);
    });
});