import Time from '../../src/Time';
import Year from '../../src/Format/Year';

describe('Year', () => {
  it('Should return a four digit year', () => {
    const time = new Time(new Date('01-01-2020 00:00:00'));
    const format = new Year();

    expect(format.format(time, ':fullYear:')).toEqual('2020');
  });

  it('Should return a two digit year', () => {
    const time = new Time(new Date('01-01-2019 00:00:00'));
    const format = new Year();

    expect(format.format(time, ':shortYear:')).toEqual('19');
  });

  it('Should return the year number from YYYY fromat', () => {
    const parsable = '15/12/1990 14:00:00';
    const format = new Year();

    const years = format.parse(parsable, 'DD/MM/YYYY H:II:SS');
    
    expect(years).toEqual(1990);
  });
});