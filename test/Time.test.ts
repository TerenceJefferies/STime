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

    it('Should return 4 for a date on wednesday', () => {
      const date = new Date('2019-02-07 00:00:00');
      const time = new Time(date);

      expect(time.getDayOfWeek()).toEqual(4);
    });
});

describe('Time Formatting', () => {
  it('Should return 01-01-2020', () => {
    const time = new Time(new Date('01-01-2020 00:00:00'));
    const formatted = time.format(':leadingDay:/:leadingMonth:/:fullYear:');

    expect(formatted).toEqual('01/01/2020');
  });

  it('Should return 04/06/1955 19:55:27', () => {
    const time = new Time(new Date('06-04-1955 19:55:27'));
    const formatted = time.format(':leadingDay:/:leadingMonth:/:fullYear: :leadingHour:::leadingMinute:::leadingSecond:');

    expect(formatted).toEqual('04/06/1955 19:55:27');
  });

  it('Should return 04/06/1955 19:55:27 PM', () => {
    const time = new Time(new Date('06-04-1955 19:55:27'));
    const formatted = time.format(':leadingDay:/:leadingMonth:/:fullYear: :leadingHour:::leadingMinute:::leadingSecond: :amPmUpper:');

    expect(formatted).toEqual('04/06/1955 19:55:27 PM');
  });

  it('Should return 04/06/1955 08:55:27 AM', () => {
    const time = new Time(new Date('06-04-1955 08:55:27'));
    const formatted = time.format(':leadingDay:/:leadingMonth:/:fullYear: :leadingHour:::leadingMinute:::leadingSecond: :amPmUpper:');

    expect(formatted).toEqual('04/06/1955 08:55:27 AM');
  });

  it('Should return Thursday 30 July', () => {
    const time = new Time(new Date('2020-07-30 08:55:27'));
    const formatted = time.format(':weekday: :leadingDay: :monthName:');

    expect(formatted).toEqual('Thursday 30 July');
  });
});