import TimeFromNowBuilder from '../src/TimeFromNowBuilder';
import Time from '../src/Time';

describe('TimeFromNowBuilder', () => {
  it('Should return a time 1 day in the future', () => {
    const builder = new TimeFromNowBuilder(1);
    const time = builder.days().from().now();

    const date = new Date();
    date.setDate(date.getDate() + 1);

    expect(time.getDay()).toEqual(date.getDate());
  });

  it('Should return a time 7 days in the future', () => {
    const builder = new TimeFromNowBuilder(7);
    const time = builder.days().from().now();

    const date = new Date();
    date.setDate(date.getDate() + 7);

    expect(time.getDay()).toEqual(date.getDate());
  });

  it('Should return a time 14 days in the past', () => {
    const builder = new TimeFromNowBuilder(14);
    const time = builder.days().before().now();

    const date = new Date();
    date.setDate(date.getDate() - 14);

    expect(time.getDay()).toEqual(date.getDate());
  });

  it('Should return a time 1 day after the specified time', () => {
    const builder = new TimeFromNowBuilder(1);
    const testDate = new Date();
    testDate.setDate(testDate.getDate() - 1);
    const sample = new Time(testDate);
    const time = builder.days().from().time(sample);
    
    expect(time.getDay()).toEqual(sample.getDay() + 1);
  });

  it('Should return a time 10 seconds after the specified time', () => {
    const builder = new TimeFromNowBuilder(10);
    const sample = new Time(new Date('01-01-2020 00:00:30'));
    const time = builder.seconds().from().time(sample);
    
    expect(time.getSeconds()).toEqual(40);
  });

  it('Should return a time 10 minutes in the past', () => {
    const builder = new TimeFromNowBuilder(30);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.minutes().before().time(sample);
    
    expect(time.getMinutes()).toEqual(0);
  });

  it('Should return a time 3 hours in the future', () => {
    const builder = new TimeFromNowBuilder(3);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.hours().from().time(sample);
    
    expect(time.getHours()).toEqual(3);
  });

  it('Should return a time 3 months in the past', () => {
    const builder = new TimeFromNowBuilder(3);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.months().before().time(sample);
    
    expect(time.getMonth()).toEqual(10);
  });

  it('Should return a time 3 years in the future', () => {
    const builder = new TimeFromNowBuilder(3);
    const sample = new Time(new Date('01-01-2020 00:30:30'));
    const time = builder.years().from().time(sample);
    
    expect(time.getYear()).toEqual(2023);
  });
});