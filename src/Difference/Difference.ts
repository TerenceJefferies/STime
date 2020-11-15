import Time from '../Time';
import DifferenceMonthAware from './DifferenceMonthAware';

/**
 * Representation of a diff between two dates
 */
class Difference extends DifferenceMonthAware {
  /**
   * @var {number} differenceInSeconds Difference in seconds
   */
  readonly differenceInSeconds: number;
  /**
   * @var {Time} timeOne First time to compare
   */
  readonly timeOne: Time;
  /**
   * @var {Time} timeTwo Time to compare to timeOne
   */
  readonly timeTwo: Time

  /**
   * Create a difference
   * @param {Time} timeOne First time to compare
   * @param {Time} timeTwo Second time to compare to timeOne
   */
  constructor(timeOne: Time, timeTwo: Time) {
      super();
      this.differenceInSeconds =
      Math.abs(timeOne.toTimestamp() - timeTwo.toTimestamp());
      this.timeOne = timeOne;
      this.timeTwo = timeTwo;
  }

  /**
   * Get total number of seconds between two times
   * @example
   * `difference.getTotalSeconds();`
   * @return {number} Total number of seconds between two dates
   */
  getTotalSeconds(): number {
      return this.differenceInSeconds;
  }

  /**
   * Get total minutes between dates
   * @return {number} Total number of minutes between two times
   */
  getTotalMinutes(): number {
      return Math.floor((this.differenceInSeconds / 60));
  }

  /**
   * Get total hours between two times
   * @return {number} Total number of hours between two times
   */
  getTotalHours(): number {
      return Math.floor((this.getTotalMinutes() / 60));
  }

  /**
   * Get total days between to times
   * @return {number} Total number of days between two times
   */
  getTotalDays(): number {
      return Math.floor((this.getTotalHours() / 24));
  }

  /**
   * Get total weeks between two times
   * @return {number} Total number of weeks between two times
   */
  getTotalWeeks(): number {
      return Math.floor((this.getTotalDays() / 7));
  }
}

export default Difference;
