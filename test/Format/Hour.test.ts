import Time from '../../src/Time';
import Hour from '../../src/Format/Hour';

describe('Hour', () => {
  it('Should return the hour number with leading zeros', () => {
    const time = new Time(new Date('06-09-20 03:00:00'));
    const format = new Hour();
    const formatted = time.format(':leadingHour:');
  
    expect(formatted).toEqual('03');
  });

  it('Should return the hour number without leading zeros', () => {
    const time = new Time(new Date('06-09-20 09:00:00'));
    const format = new Hour();
    const formatted = time.format(':hour:');
  
    expect(formatted).toEqual('9');
  });

  it('Should return the hour number from H format', () => {
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

  it('Should return 3 from a :hourTwelve: format', () => {
    const time = new Time(new Date('06-09-20 15:00:00'));
    const formatted = time.format(':hourTwelve:');
  
    expect(formatted).toEqual('3');
  });

  it('Should return 03 from a :longHourTwelve: format', () => {
    const time = new Time(new Date('06-09-20 15:00:00'));
    const formatted = time.format(':leadingHourTwelve:');
  
    expect(formatted).toEqual('03');
  });
});

describe.each([
  ['06-09-20 00:00:00', ':hourTwelve:', '0'],
  ['06-09-20 01:00:00', ':hourTwelve:', '1'],
  ['06-09-20 02:00:00', ':hourTwelve:', '2'],
  ['06-09-20 03:00:00', ':hourTwelve:', '3'],
  ['06-09-20 04:00:00', ':hourTwelve:', '4'],
  ['06-09-20 05:00:00', ':hourTwelve:', '5'],
  ['06-09-20 06:00:00', ':hourTwelve:', '6'],
  ['06-09-20 07:00:00', ':hourTwelve:', '7'],
  ['06-09-20 08:00:00', ':hourTwelve:', '8'],
  ['06-09-20 09:00:00', ':hourTwelve:', '9'],
  ['06-09-20 10:00:00', ':hourTwelve:', '10'],
  ['06-09-20 11:00:00', ':hourTwelve:', '11'],
  ['06-09-20 12:00:00', ':hourTwelve:', '12'],
  ['06-09-20 13:00:00', ':hourTwelve:', '1'],
  ['06-09-20 14:00:00', ':hourTwelve:', '2'],
  ['06-09-20 15:00:00', ':hourTwelve:', '3'],
  ['06-09-20 16:00:00', ':hourTwelve:', '4'],
  ['06-09-20 17:00:00', ':hourTwelve:', '5'],
  ['06-09-20 18:00:00', ':hourTwelve:', '6'],
  ['06-09-20 19:00:00', ':hourTwelve:', '7'],
  ['06-09-20 20:00:00', ':hourTwelve:', '8'],
  ['06-09-20 21:00:00', ':hourTwelve:', '9'],
  ['06-09-20 22:00:00', ':hourTwelve:', '10'],
  ['06-09-20 23:59:59', ':hourTwelve:', '11'],
])('Should return the correct format (%s, %s, %s)', (date, format, expected) =>  {
  const time = new Time(new Date(date));
  const formatted = time.format(format);

  expect(formatted).toEqual(expected);
});