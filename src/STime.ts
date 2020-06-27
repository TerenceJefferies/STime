import TimeFactory from './TimeFactory';
import Time from './Time';
import Difference from './Difference/Difference';
import TimeFromBuilder from './TimeFromBuilder';
import Generator from './Generator';
import Parser from './Parser';

/**
 * STime facade used to access the Simple Time
 */
class STime extends Generator {
  /**
   * Create a new instance of STime
   * @param {TimeFactory} timeFactory Factory to use to create time instances
   */
  constructor(timeFactory: TimeFactory) {
    super(timeFactory);
  }

  /**
   * Create a date before or after the current date
   * @example
   * ```javascript
   * // Create a time 7 days from now
   * stime.create(7).days().from().now();
   * // Create a time 14 days before now
   * stime.create(14).days().before().now();
   * ```
   * @param {number} units Number of units to add or sutract to/from the current date
   * @return {TimeFromBuilder}
   */
  create(units: number): TimeFromBuilder {
    return new TimeFromBuilder(units);
  }

  /**
   * Get the difference between two times
   * @example
   * ```javascript
   * const difference = stime.difference(timeOne, timeTwo);
   * const secondsBetweenTimes = difference.getTotalSeconds();
   * ```
   * @param {Time} timeOne First time to compare
   * @param {Time} timeTwo Time to compare to timeOne
   * @return {Difference} between the two times
   */
  difference(timeOne: Time, timeTwo: Time): Difference {
    return new Difference(timeOne, timeTwo);
  }

  /**
   * Parse a string into a time
   * @example
   * ```javascript
   * const time = stime.parse('13/01/2000 13:00:00');
   * time.getYear(); // 2000
   * ```
   * @param {string} date String to convert into a time
   * @param {string} format Format to parse the string in
   */
  parse(date: string, format: string): Time {
    return (new Parser(date, format)).parse();
  }
}

export default STime;
