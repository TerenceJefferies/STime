import AmPm from '../../src/Format/AmPm';
import Time from '../../src/Time';

describe('AmPm', () => {
  it('Should return AM for times before midday', () => {
    const format = new AmPm();
    const time = new Time(new Date('01-01-2000 09:00:00'));

    const result = format.format(time, 'P');

    expect(result).toEqual('AM');
  });

  it('Should return PM for times before midday', () => {
    const format = new AmPm();
    const time = new Time(new Date('01-01-2000 13:00:00'));

    const result = format.format(time, 'P');

    expect(result).toEqual('PM');
  });

  it('Should return am for times before midday', () => {
    const format = new AmPm();
    const time = new Time(new Date('01-01-2000 02:00:00'));

    const result = format.format(time, 'p');

    expect(result).toEqual('am');
  });

  it('Should return pm for times before midday', () => {
    const format = new AmPm();
    const time = new Time(new Date('01-01-2000 20:00:00'));

    const result = format.format(time, 'p');

    expect(result).toEqual('pm');
  });
});