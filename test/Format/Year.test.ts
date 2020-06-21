import Time from '../../src/Time';
import Year from '../../src/Format/Year';

describe('Year', () => {
  it('Should return a four digit year', () => {
    const time = new Time(new Date('01-01-2020 00:00:00'));
    const format = new Year();

    expect(format.format(time, 'YYYY')).toEqual('2020');
  });

  it('Should return a two digit year', () => {
    const time = new Time(new Date('01-01-2019 00:00:00'));
    const format = new Year();

    expect(format.format(time, 'YY')).toEqual('19');
  });
});