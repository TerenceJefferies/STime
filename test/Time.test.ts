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

describe('Time Formatting', () => {
  it('Should return a 4 digit year', () => {
    const time = new Time(new Date());

    expect(time.format('YYYY')).toEqual((new Date()).getFullYear().toString());
  });

  it('Should return a 2 digit year', () => {
    const time = new Time(new Date());
    const year = new Date().getFullYear().toString();
    expect(time.format('YY')).toEqual(year.substring(2, year.length));
  });

  it('Should return the full month name', () => {
    const time = new Time(new Date('01-01-20 00:00:00'));
    const formatted = time.format('MMMM');

    expect(formatted).toEqual('January');
  });

  it('Should return the 3 character month name', () => {
    const time = new Time(new Date('12-01-20 00:00:00'));
    const formatted = time.format('MMM');

    expect(formatted).toEqual('Dec');
  });

  it('Should return the month number with leading zeros', () => {
    const time = new Time(new Date('09-01-20 00:00:00'));
    const formatted = time.format('MM');

    expect(formatted).toEqual('09');
  });

  it('Should return the month number without leading zeros', () => {
    const time = new Time(new Date('06-01-20 00:00:00'));
    const formatted = time.format('M');

    expect(formatted).toEqual('6');
  });

  it('Should return the day number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 00:00:00'));
    const formatted = time.format('DD');

    expect(formatted).toEqual('09');
  });

  it('Should return the hours without leading zeros', () => {
    const time = new Time(new Date('06-09-20 09:00:00'));
    const formatted = time.format('H');

    expect(formatted).toEqual('9');
  });

  it('Should return the hours with leading zeros', () => {
    const time = new Time(new Date('06-09-20 07:00:00'));
    const formatted = time.format('HH');

    expect(formatted).toEqual('07');
  });

  it('Should return the minutes without leading zeros', () => {
    const time = new Time(new Date('06-09-20 07:09:00'));
    const formatted = time.format('I');

    expect(formatted).toEqual('9');
  });

  it('Should return the minutes with leading zeros', () => {
    const time = new Time(new Date('06-09-20 07:05:00'));
    const formatted = time.format('II');

    expect(formatted).toEqual('05');
  });

  it('Should return the seconds without leading zeros', () => {
    const time = new Time(new Date('06-09-20 07:09:03'));
    const formatted = time.format('S');

    expect(formatted).toEqual('3');
  });

  it('Should return the seconds with leading zeros', () => {
    const time = new Time(new Date('06-09-20 07:05:08'));
    const formatted = time.format('SS');

    expect(formatted).toEqual('08');
  });

  it('Should return 01-01-2020', () => {
    const time = new Time(new Date('01-01-2020 00:00:00'));
    const formatted = time.format('DD/MM/YYYY');

    expect(formatted).toEqual('01/01/2020');
  });

  it('Should return 04/06/1955 19:55:27', () => {
    const time = new Time(new Date('06-04-1955 19:55:27'));
    const formatted = time.format('DD/MM/YYYY HH:II:SS');

    expect(formatted).toEqual('04/06/1955 19:55:27');
  });
});