import Time from '../../src/Time';
import DayOfWeek from '../../src/Format/DayOfWeek';
import Formats from '../../src/Format/Formats';

describe('Day Of Week', () => {
  it('Should return Tuesday for an L format', () => {
    const date = new Date('2020-06-30 20:00:00');
    const time = new Time(date);
    const format = new DayOfWeek();

    const result = format.format(time, Formats.WEEKDAY_NAME);

    expect(result).toEqual('Tuesday');
  });

  it('Should return Fri for an l format', () => {
    const date = new Date('2020-07-03 20:00:00');
    const time = new Time(date);
    const format = new DayOfWeek();

    const result = format.format(time, Formats.SHORT_WEEKDAY_NAME);

    expect(result).toEqual('Fri');
  });
});