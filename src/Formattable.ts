import Year from './Format/Year';
import Month from './Format/Month';
import Day from './Format/Day';
import Hour from './Format/Hour';
import Second from './Format/Second';
import Minute from './Format/Minute';
import AmPm from './Format/AmPm';

/**
 * Makes a class formattable
 */
abstract class Formattable {
  abstract root: Date;
  abstract getMinutes(): number;
  abstract getHours(): number;
  abstract getSeconds(): number;
  abstract getDay(): number;
  abstract getMonth(): number;
  abstract getYear(): number;

  /**
   * Format the date into a string
   * @example
   * ```javascript
   * time.format('DD/MM/YYYY'); // 01-01-2020
   * ```
   * @param {string} format Format to turn the date into.
   * @return {string} Formatted date
   */
  format(format: string): string {
    let formatted = (new Year()).format(this, format);
    formatted = (new Day()).format(this, formatted);
    formatted = (new Month()).format(this, formatted);
    formatted = (new Hour()).format(this, formatted);
    formatted = (new Minute()).format(this, formatted);
    formatted = (new Second()).format(this, formatted);
    formatted = (new AmPm()).format(this, formatted);
    return formatted;
  }
}

export default Formattable;