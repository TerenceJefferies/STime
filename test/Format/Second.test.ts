import Time from '../../src/Time';
import Second from '../../src/Format/Second';

describe('Second', () => {
  it('Should return the second number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 03:00:05'));
    const format = new Second();
    const formatted = time.format(':leadingSecond:');
  
    expect(formatted).toEqual('05');
  });

  it('Should return the second number without leading zeros', () => {
    const time = new Time(new Date('06-09-20 09:00:07'));
    const format = new Second();
    const formatted = time.format(':second:');
  
    expect(formatted).toEqual('7');
  });

  it('Should parse 13 out of a string', () => {
    const parsable = '15/12/1990 14:00:13';
    const format = new Second();

    const seconds = format.parse(parsable, 'DD/MM/YYYY HH:II:SS');
    
    expect(seconds).toEqual(13);
  });

  it('Should parse 14 out of a string with a S format', () => {
    const parsable = '15/12/1990 14:00:14';
    const format = new Second();

    const seconds = format.parse(parsable, 'DD/MM/YYYY HH:II:S');
    
    expect(seconds).toEqual(14);
  });

  it('Should parse 5 out of a string with an S format', () => {
    const parsable = '15/12/1990 14:00:5';
    const format = new Second();

    const seconds = format.parse(parsable, 'DD/MM/YYYY HH:II:S');
    
    expect(seconds).toEqual(5);
  });
});