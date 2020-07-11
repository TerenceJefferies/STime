import Time from '../../src/Time';
import Day from '../../src/Format/Day';

describe('Day', () => {
  it('Should return the day number with leading zeros', () => {
    const time = new Time(new Date('2020-06-09 00:00:00'));
    const format = new Day();
    const formatted = time.format(':leadingDay:');
  
    expect(formatted).toEqual('09');
  });

  it('Should return the day number without leading zeros', () => {
    const time = new Time(new Date('2020-06-09 00:00:00'));
    const format = new Day();
    const formatted = time.format(':day:');
  
    expect(formatted).toEqual('9');
  });

  it('Should return the day number from D fromat', () => {
    const parsable = '15/12/1990 14:00:00';
    const format = new Day();

    const days = format.parse(parsable, 'D/MM/YYYY HH:II:S');
    
    expect(days).toEqual(15);
  });

  it('Should return the day number from DD format', () => {
    const parsable = '01/12/1990 14:00:00';
    const format = new Day();

    const days = format.parse(parsable, 'DD/MM/YYYY HH:II:S');
    
    expect(days).toEqual(1);
  });

  it('Should return any number from DD format', () => {
    const max = 31;
    const format = new Day();

    for (let day = 1; day < max; day ++) {
      const dayString = (day < 10) ? '0' + day.toString() : day.toString();
      const parsable = dayString + '/01/1990 15:00:00';
      const days = format.parse(parsable, 'DD/MM/YYYY HH:II:SS');
      expect(days).toEqual(day);
    }   
  });
});