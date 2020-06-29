import Difference from '../../src/Difference/Difference';
import Time from '../../src/Time';

describe('Difference', () => {
    it('Should return the number of seconds', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-01-2020 14:00:30'));
        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalSeconds()).toEqual(30);
    });

    it('Should return the number of minutes', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-01-2020 14:05:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalMinutes()).toEqual(5);
    });

    it('Should return the number of hours', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-01-2020 16:00:00'));

        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalHours()).toEqual(2);
    });

    it('Should return the number of days', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-04-2020 14:00:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalDays()).toEqual(3);
    });

    it('Should return the minutes as an integer', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-01-2020 14:05:30'));
        const diff = new Difference(timeOne, timeTwo);

        expect(Number.isInteger(diff.getTotalMinutes())).toBeTruthy();
    });

    it('Should return the hours as an integer', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-01-2020 17:30:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(Number.isInteger(diff.getTotalHours())).toBeTruthy();
    });

    it('Should return the days as an integer', () => {
        const timeOne = new Time(new Date('01-01-2020 00:00:00'));
        const timeTwo = new Time(new Date('01-01-2020 14:00:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(Number.isInteger(diff.getTotalDays())).toBeTruthy();
    });

    it('Should return the weeks', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-15-2020 14:00:00'));

        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalWeeks()).toEqual(2);
    });

    it('Should return the weeks as an integer', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('01-16-2020 14:00:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(Number.isInteger(diff.getTotalWeeks())).toBeTruthy();
    });

    it('Should return the months on the same year', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('11-01-2020 14:00:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalMonths()).toEqual(10);
    });

    it('Should return the months over a year boundary', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('11-01-2021 14:00:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalMonths()).toEqual(22);
    });

    it('Should return the months over a year boundary as an integer', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('11-15-2021 17:35:33'));
        const diff = new Difference(timeOne, timeTwo);

        expect(Number.isInteger(diff.getTotalMonths())).toBeTruthy()
    });

    it('Should return the number of years', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('11-01-2025 14:00:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(diff.getTotalYears()).toEqual(5);
    });

    it('Should return the number of years as an integer', () => {
        const timeOne = new Time(new Date('01-01-2020 14:00:00'));
        const timeTwo = new Time(new Date('11-01-2025 14:00:00'));
        const diff = new Difference(timeOne, timeTwo);

        expect(Number.isInteger(diff.getTotalYears())).toBeTruthy();
    });

    it('Should return 1 hour difference for timezones', () => {
      const timeOne = new Time(new Date('01-01-2020 14:00:00 GMT+1:00'));
      const timeTwo = new Time(new Date('01-01-2020 14:00:00 GMT+2:00'));

      const diff = new Difference(timeOne, timeTwo);

      expect(diff.getTotalHours()).toEqual(1);
    });
});