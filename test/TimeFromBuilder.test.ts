import TimeFromBuilder from '../src/TimeFromBuilder';
import Time from '../src/Time';

describe('TimeFromBuilder', () => {
  it('Should return a time 1 day in the future', () => {
    const builder = new TimeFromBuilder(1);
    const time = builder.days().from().now();

    const date = new Date();
    date.setDate(date.getDate() + 1);

    expect(time.getDay()).toEqual(date.getDate());
  });

  it('Should return a time 7 days in the future', () => {
    const builder = new TimeFromBuilder(7);
    const time = builder.days().from().now();

    const date = new Date();
    date.setDate(date.getDate() + 7);

    expect(time.getDay()).toEqual(date.getDate());
  });

  it('Should return a time 14 days in the past', () => {
    const builder = new TimeFromBuilder(14);
    const time = builder.days().before().now();

    const date = new Date();
    date.setDate(date.getDate() - 14);

    expect(time.getDay()).toEqual(date.getDate());
  });

  it('Should return a time 1 day after the specified time', () => {
    const builder = new TimeFromBuilder(1);
    const testDate = new Date();
    testDate.setDate(testDate.getDate() - 1);
    const sample = new Time(testDate);
    const time = builder.days().from().time(sample);

    const fixture = new Date();

    expect(time.getDay()).toEqual(fixture.getDate());
  });

  it('Should return a time 10 seconds after the specified time', () => {
    const builder = new TimeFromBuilder(10);
    const sample = new Time(new Date('01-01-2020 00:00:30'));
    const time = builder.seconds().from().time(sample);

    expect(time.getSeconds()).toEqual(40);
  });

  it('Should return a time 10 minutes in the past', () => {
    const builder = new TimeFromBuilder(30);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.minutes().before().time(sample);

    expect(time.getMinutes()).toEqual(0);
  });

  it('Should return a time 3 hours in the future', () => {
    const builder = new TimeFromBuilder(3);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.hours().from().time(sample);

    expect(time.getHours()).toEqual(3);
  });

  it('Should return a time 3 months in the past', () => {
    const builder = new TimeFromBuilder(3);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.months().before().time(sample);

    expect(time.getMonth()).toEqual(10);
  });

  it('Should return a time 3 years in the future', () => {
    const builder = new TimeFromBuilder(3);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.years().from().time(sample);

    expect(time.getYear()).toEqual(2023);
  });
});
