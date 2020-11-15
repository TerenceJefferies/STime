import TimeFactory from './TimeFactory';
import Time from './Time';

/**
 * Generates new instances of time
 */
class Generator {
  readonly timeFactory: TimeFactory;

  /**
   * Create a new instance of time
   * @param {TimeFactory} timeFactory
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
}

export default Generator;
