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

  it('Should return the hour number from H fromat', () => {
    const parsable = '15/12/1990 14:00:00';
    const format = new Hour();

    const hours = format.parse(parsable, 'DD/MM/YYYY H:II:S');
    
    expect(hours).toEqual(14);
  });

  it('Should return the hour number from HH format', () => {
    const parsable = '01/12/1990 04:00:00';
    const format = new Hour();

    const hours = format.parse(parsable, 'DD/MM/YYYY HH:II:S');
    
    expect(hours).toEqual(4);
  });

  it('Should return any number from HH format', () => {
    const max = 23;
    const format = new Hour();

    for (let hour = 0; hour < max; hour ++) {
      const hourString = (hour < 10) ? '0' + hour.toString() : hour.toString();
      const parsable = '01/01/1990 ' + hourString + ':00:00';
      const days = format.parse(parsable, 'DD/MM/YYYY HH:II:SS');
      expect(days).toEqual(hour);
    }   
  });
});