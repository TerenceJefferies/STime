import Time from '../../src/Time';
import Day from '../../src/Format/Day';

describe('Day', () => {
  it('Should return the day number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 00:00:00'));
    const format = new Day();
    const formatted = time.format('DD');
  
    expect(formatted).toEqual('09');
  });

  it('Should return the day number without leading zeros', () => {
    const time = new Time(new Date('06-09-20 00:00:00'));
    const format = new Day();
    const formatted = time.format('D');
  
    expect(formatted).toEqual('9');
  });
});