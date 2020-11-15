import Second from './Format/Second';
import Minute from './Format/Minute';
import Hour from './Format/Hour';
import Day from './Format/Day';
import Month from './Format/Month';
import Year from './Format/Year';
import Time from './Time';

/**
 * Parser to convert a string into a time
 */
class Parser {
  parsable: string;

  format: string;

  /**
   * Create a new parser
   * @param {string} parsable Parsable string to parse
   * @param {string} format Format to parse with
   */
  constructor(parsable: string, format: string) {
      this.parsable = parsable;
      this.format = format;
  }

  /**
   * Parse into a time
   * @return {Time}
   */
  parse(): Time {
      const seconds = (new Second).parse(this.parsable, this.format);
      const minutes = (new Minute).parse(this.parsable, this.format);
      const hours = (new Hour).parse(this.parsable, this.format);
      const days = (new Day).parse(this.parsable, this.format);
      const months = (new Month).parse(this.parsable, this.format);
      const years = (new Year).parse(this.parsable, this.format);

      const date = new Date();
      date.setSeconds(seconds);
      date.setMinutes(minutes);
      date.setHours(hours);
      date.setDate(days);
      date.setMonth((months - 1));
      date.setFullYear(years);

      return new Time(date);
  }
}

export default Parser;
