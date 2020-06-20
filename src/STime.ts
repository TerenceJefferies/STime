import TimeFactory from './TimeFactory';
import Time from './Time';
import Difference from './Difference/Difference';

/**
 * STime facade used to access the Simple Time
 */
class STime {
    /**
     * Time factory to create new instances of time
     */
    readonly timeFactory: TimeFactory;

    /**
     * Create a new instance of STime
     * @param {TimeFactory} timeFactory Factory to use to create time instances
     */
    constructor(timeFactory: TimeFactory) {
      this.timeFactory = timeFactory;
    }

    /**
     * Get the current time
     * @example
     * ```
     * const currentTime = stime.now();
     * console.log(currentTime.getTimestamp());
     * ```
     * @return {Time} Current time
     */
    now(): Time {
      return this.timeFactory.create();
    }

    /**
     * Create a time representing yesterday at the current time
     * @return {Time} Representation of yesterday
     */
    yesterday(): Time {
      return this.timeFactory.createForYesterday();
    }

    /**
     * Create a time representing tomorrow
     * @return {Time} Representation of tomorrow
     */
    tomorrow(): Time {
      return this.timeFactory.createForTomorrow();
    }

    /**
     * Create a new Time from a native Date
     * @example
     * ```
     * const date = new Date();
     * const time = stime.fromDate(date);
     * ```
     * @param {Date} date Date to create the time from
     * @return {Time} created from the date provided
     */
    fromDate(date: Date): Time {
      return this.timeFactory.fromDate(date);
    }

    /**
     * Get the difference between two times
     * @example
     * ```
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
}

export default STime;
