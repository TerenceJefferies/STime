import Time from '../../src/Time';
import Hour from '../../src/Format/Hour';

describe('Minute', () => {
  it('Should return the minute number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 03:05:00'));
    const format = new Hour();
    const formatted = time.format('II');
  
    expect(formatted).toEqual('05');
  });

  it('Should return the minute number without leading zeros', () => {
    const time = new Time(new Date('06-09-20 19:06:00'));
    const format = new Hour();
    const formatted = time.format('I');
  
    expect(formatted).toEqual('6');
  });
});