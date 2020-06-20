import Time from './Time';

/**
 * A time factory used to create new instances of Time
 */
class TimeFactory {
  /**
    * Create a new time at the current date
    * @return {Time} An instance of time
    */
  create(): Time {
    return new Time(new Date());
  }

  /**
   * Create a time representing yesterday at the current time
   * @return {Time} Time representing yesterday
   */
  createForYesterday() : Time {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return new Time(date);
  }

  /**
   * Create a time representing tomorrow
   * @return {Time} Time represeting tomorrow
   */
  createForTomorrow(): Time {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return new Time(date);
  }

  /**
    * Retrieve a new instance from a javascript date
    * @param {Date} date Date to create time from
    * @return {Time} An instance of time from the provided date
    */
  fromDate(date: Date): Time {
    return new Time(date);
  }
}

export default TimeFactory;
