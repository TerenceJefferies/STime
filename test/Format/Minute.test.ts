import Time from '../../src/Time';
import Minute from '../../src/Format/Minute';

describe('Minute', () => {
  it('Should return the minute number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 03:05:00'));
    const format = new Minute();
    const formatted = time.format(':leadingMinute:');
  
    expect(formatted).toEqual('05');
  });

  it('Should return the minute number without leading zeros', () => {
    const time = new Time(new Date('06-09-20 19:06:00'));
    const format = new Minute();
    const formatted = time.format(':minute:');
  
    expect(formatted).toEqual('6');
  });

  it('Should return the minute with II format', () => {
    const parsable = '15/12/1990 14:07:55';
    const format = new Minute();

    const minutes = format.parse(parsable, 'DD/MM/YYYY HH:II:SS');
    
    expect(minutes).toEqual(7);
  });

  it('Should return the minute with I format', () => {
    const parsable = '15/12/1990 14:33:55';
    const format = new Minute();

    const minutes = format.parse(parsable, 'DD/MM/YYYY HH:II:SS');
    
    expect(minutes).toEqual(33);
  });
});