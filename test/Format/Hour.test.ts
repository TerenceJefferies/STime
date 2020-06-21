import Time from '../../src/Time';
import Hour from '../../src/Format/Hour';

describe('Hour', () => {
  it('Should return the hour number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 03:00:00'));
    const format = new Hour();
    const formatted = time.format('HH');
  
    expect(formatted).toEqual('03');
  });

  it('Should return the hour number without leading zeros', () => {
    const time = new Time(new Date('06-09-20 09:00:00'));
    const format = new Hour();
    const formatted = time.format('H');
  
    expect(formatted).toEqual('9');
  });
});