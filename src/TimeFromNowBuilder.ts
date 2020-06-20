import Unit from './Unit';
import Day from './Unit/Day';
import Time from './Time';
import Second from './Unit/Second';
import Minute from './Unit/Minute';
import Hour from './Unit/Hour';
import Month from './Unit/Month';
import Year from './Unit/Year';

/**
 * Builds a new time
 * @example
 * ```javascript
 * const builder = new TimeFromNowBuilder(1);
 * const time = builder.days().from().now();
 * ```
 */
class TimeFromNowBuilder {
  readonly FUTURE = 1;
  readonly PAST = 2;

  fromCurrent: number;

  unit: Unit | null;

  direction: number | null;

  origin: Time | null;

  /**
   * Create a new TimeFromNowBuilder
   * @param {number} fromCurrent Number of units to 
   * separate from the current date
   */
  constructor(fromCurrent: number);
  constructor(fromCurrent: number, unit: Unit);
  constructor(fromCurrent: number, unit: Unit, direction: number);
  constructor(fromCurrent: number, unit: Unit, direction: number, origin: Time);
  constructor(fromCurrent: number, unit?: Unit, direction?: number, origin?: Time) {
    this.fromCurrent = fromCurrent;
    this.unit = unit || null;
    this.direction = direction || null;
    this.origin = origin || null;
  }

  /**
   * Configure number of days to offset by
   * @return {TimeFromNowBuilder}
   */
  days(): TimeFromNowBuilder {
    return new TimeFromNowBuilder(this.fromCurrent, new Day());
  }

  /**
   * Configure number of seconds to offset by
   * @return {TimeFromNowBuilder}
   */
  seconds(): TimeFromNowBuilder {
    return new TimeFromNowBuilder(this.fromCurrent, new Second());
  }

  /**
   * Configures the minute context
   * @return {TimeFromNowBuilder}
   */
  minutes(): TimeFromNowBuilder {
    return new TimeFromNowBuilder(this.fromCurrent, new Minute());
  }

  /**
   * Configures the hour context
   * @return {TimeFromNowBuilder}
   */
  hours(): TimeFromNowBuilder {
    return new TimeFromNowBuilder(this.fromCurrent, new Hour());
  }

  /**
   * Configures the month context
   * @return {TimeFromNowBuilder}
   */
  months(): TimeFromNowBuilder {
    return new TimeFromNowBuilder(this.fromCurrent, new Month());
  }

  /**
   * Configures the year context
   * @return {TimeFromNowBuilder}
   */
  years(): TimeFromNowBuilder {
    return new TimeFromNowBuilder(this.fromCurrent, new Year());
  }

  /**
   * Create a new TimeFromNowBuilder configured in a future context
   * @return {TimeFromNowBuilder}
   */
  from(): TimeFromNowBuilder {
    if (!this.unit) {
      throw new Error('Must provide type before specifying direction');
    }

    return new TimeFromNowBuilder(this.fromCurrent, this.unit, this.FUTURE);
  }

  /**
   * Configured TimeFromNowBuilder in a past context
   * @return {TimeFromNowBuilder}
   */
  before(): TimeFromNowBuilder {
    if (!this.unit) {
      throw new Error('Must provide type before specifying direction');
    }

    return new TimeFromNowBuilder(this.fromCurrent, this.unit, this.PAST);
  }

  /**
   * Return configured time starting from now
   * @return {Time}
   */
  now(): Time {
    if (!this.unit || !this.direction) {
      throw new Error('Called final chain method before fully configuring instance');
    }

    return (new TimeFromNowBuilder(
      this.fromCurrent, 
      this.unit, 
      this.direction, 
      new Time(new Date())
    )).get();
  }

  /**
   * Get the configured time from the specified time
   * @param {Time}
   */
  time(time: Time): Time {
    if (!this.unit || !this.direction) {
      throw new Error('Called final chain method before fully configuring instance');
    }

    return (new TimeFromNowBuilder(
      this.fromCurrent, 
      this.unit, 
      this.direction, 
      time
    )).get();
  }

  /**
   * Get the resultant time
   * @return {Time} Created time
   */
  get(): Time {
    if (!this.unit || !this.origin) {
      throw new Error('Must provide a unit (eg .days()) before attempting to get'); 
    }

    const offset = (this.direction == this.PAST) ? -this.fromCurrent : this.fromCurrent;
    return this.unit.createIn(this.origin, offset);
  }
}

export default TimeFromNowBuilder;