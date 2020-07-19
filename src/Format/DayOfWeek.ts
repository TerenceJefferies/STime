import Format from '../Format';
import Formattable from '../Formattable';
import Formats from './Formats';

/**
 * Day of the week formatter
 */
class DayOfWeek extends Format {
  private readonly weekMap = [
    {
      dayOfWeek: 0,
      name: 'Sunday',
      shortName: 'Sun',
    },
    {
      dayOfWeek: 1,
      name: 'Monday',
      shortName: 'Mon',
    },
    {
      dayOfWeek: 2,
      name: 'Tuesday',
      shortName: 'Tue',
    },
    {
      dayOfWeek: 3,
      name: 'Wednesday',
      shortName: 'Wed',
    },
    {
      dayOfWeek: 4,
      name: 'Thursday',
      shortName: 'Thu',
    },
    {
      dayOfWeek: 5,
      name: 'Friday',
      shortName: 'Fri',
    },
    {
      dayOfWeek: 6,
      name: 'Saturday',
      shortName: 'Sat',
    },
  ];

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    throw new Error('Method not implemented.');
  }

  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    let formatted = format.replace(
        new RegExp(Formats.WEEKDAY_NAME, 'g'),
        this.getFullDayName(time.getDayOfWeek()),
    );
    formatted = formatted.replace(
        new RegExp(Formats.SHORT_WEEKDAY_NAME, 'g'),
        this.getShortDayName(time.getDayOfWeek()),
    );
    return formatted;
  }

  /**
   * Get the short representation of a day of the week
   * @param {number} dayNumber 0-6 - Sunday-Saturday
   * @return {string}
   */
  private getShortDayName(dayNumber: number): string {
    const monthData = this.getDayDataFromDayNumber(dayNumber);
    return monthData.shortName;
  }

  /**
   * Get the full day name for a particlar day of the week
   * @param {number} dayNumber 0-6 - Sunday-Saturday
   * @return {string}
   */
  private getFullDayName(dayNumber: number): string {
    const monthData = this.getDayDataFromDayNumber(dayNumber);
    return monthData.name;
  }

  /**
   * Get an entry from the week map for a particular day
   * @param {number} dayNumber 0-6 Sunday-Saturday
   * @return {any}
   */
  private getDayDataFromDayNumber(dayNumber: number): any {
    return this.weekMap.filter((map) => map.dayOfWeek === dayNumber).shift();
  }
}

export default DayOfWeek;
