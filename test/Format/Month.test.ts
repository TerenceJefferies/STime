import Time from '../../src/Time';
import Month from '../../src/Format/Month';

describe('Month', () => {
  it('Should return the full month name', () => {
    const time = new Time(new Date('01-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, 'MMMM');

    expect(formatted).toEqual('January');
  });

  it('Should return the 3 character month name', () => {
    const time = new Time(new Date('12-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, 'MMM');

    expect(formatted).toEqual('Dec');
  });

  it('Should return the month number with leading zeros', () => {
    const time = new Time(new Date('09-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, 'MM');

    expect(formatted).toEqual('09');
  });

  it('Should return the month number without leading zeros', () => {
    const time = new Time(new Date('06-01-20 00:00:00'));
    const format = new Month();
    const formatted = format.format(time, 'M');

    expect(formatted).toEqual('6');
  });
});