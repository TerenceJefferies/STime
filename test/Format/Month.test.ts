import Time from '../../src/Time';
import Month from '../../src/Format/Month';

describe('Month', () => {
  it('Should return the full month name', () => {
    const time = new Time(new Date('01-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, ':monthName:');

    expect(formatted).toEqual('January');
  });

  it('Should return the 3 character month name', () => {
    const time = new Time(new Date('12-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, ':shortMonthName:');

    expect(formatted).toEqual('Dec');
  });

  it('Should return the month number with leading zeros', () => {
    const time = new Time(new Date('09-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, ':leadingMonth:');

    expect(formatted).toEqual('09');
  });

  it('Should return the month number without leading zeros', () => {
    const time = new Time(new Date('06-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, ':month:');

    expect(formatted).toEqual('6');
  });

  it('Should return 1 for January with MMMM format', () => {
    const format = new Month();
    const monthNumber = format.parse('January', 'MMMM');

    expect(monthNumber).toEqual(1);
  });

  it('Should return 6 for June with MMMM format with surrounding text', () => {
    const format = new Month();
    const monthNumber = format.parse('16 June 2019', 'DD MMMM YYYY');

    expect(monthNumber).toEqual(6);
  });

  it('Should return 6 for Jun with MMM format', () => {
    const format = new Month();
    const monthNumber = format.parse('Jun', 'MMM');

    expect(monthNumber).toEqual(6);
  });

  it('Should return 5 for with M format', () => {
    const format = new Month();
    const monthNumber = format.parse('13/5/2000 10:00:00', 'DD/M/YYYY HH:II:SS');

    expect(monthNumber).toEqual(5);
  });

  it('Should return 12 for with MM format', () => {
    const format = new Month();
    const monthNumber = format.parse('13/12/2000 10:00:00', 'DD/MM/YYYY HH:II:SS');

    expect(monthNumber).toEqual(12);
  });

  it('Should return 11 for with M format', () => {
    const format = new Month();
    const monthNumber = format.parse('13/11/2000 10:00:00', 'DD/M/YYYY HH:II:SS');

    expect(monthNumber).toEqual(11);
  });
});

describe.each([
  ['January', 1],
  ['February', 2],
  ['March', 3],
  ['April', 4],
  ['May', 5],
  ['June', 6],
  ['July', 7],
  ['August', 8],
  ['September', 9],
  ['October', 10],
  ['November', 11],
  ['December', 12],
])('Should return correct month number for each full name month (%s, %i)', (monthName, expectedNumber) => {
  const format = new Month();
  const monthNumber = format.parse(monthName, 'MMMM');

  expect(monthNumber).toEqual(expectedNumber);
});

describe.each([
  ['Jan', 1],
  ['Feb', 2],
  ['Mar', 3],
  ['Apr', 4],
  ['May', 5],
  ['Jun', 6],
  ['Jul', 7],
  ['Aug', 8],
  ['Sep', 9],
  ['Oct', 10],
  ['Nov', 11],
  ['Dec', 12],
])('Should return correct month number for each short name month (%s, %i)', (monthName, expectedNumber) => {
  const format = new Month();
  const monthNumber = format.parse(monthName, 'MMM');

  expect(monthNumber).toEqual(expectedNumber);
});