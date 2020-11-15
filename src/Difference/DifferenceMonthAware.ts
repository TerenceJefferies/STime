import Time from '../Time';
import DifferenceYearAware from './DifferenceYearAware';

/**
 * Making a difference month aware
 */
abstract class DifferenceMonthAware extends DifferenceYearAware {
  /**
   * @var {Time} timeOne First time to compare
   */
  abstract timeOne: Time;

  /**
   * @var {Time} timeTwo Time to compare to timeOne
   */
  abstract timeTwo: Time;

  /**
   * Get the number of months between the two times
   * @example
   * ```javascript
   * const stime = require('stime');
   * const timeOne = stime.fromDate(new Date('01-01-2020 00:00:00'));
   * const timeTwo = stime.fromDate(new Date('06-01-2020 00:00:00'));
   * const diff = stime.difference(timeOne, timeTwo);
   * const months = diff.getTotalMonths(); // 5
   * ```
   * @return {number} Number of months between the two dates
   */
  getTotalMonths(): number {
      const yearDifference = this.getTotalYears();
      const monthsFromYearDiff = (yearDifference * 12);
      const monthsInSameYear =
      Math.abs((this.timeOne.getMonth() - this.timeTwo.getMonth()));

      return (monthsFromYearDiff + monthsInSameYear);
  }
}

export default DifferenceMonthAware;
