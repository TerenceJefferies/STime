import Time from '../../src/Time';
import Second from '../../src/Format/Second';

describe('Second', () => {
  it('Should return the second number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 03:00:05'));
    const format = new Second();
    const formatted = time.format('SS');
  
    expect(formatted).toEqual('05');
  });

  it('Should return the second number without leading zeros', () => {
    const time = new Time(new Date('06-09-20 09:00:07'));
    const format = new Second();
    const formatted = time.format('S');
  
    expect(formatted).toEqual('7');
  });
});