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
    * Retrieve a new instance from a javascript date
    * @param {Date} date Date to create time from
    * @return {Time} An instance of time from the provided date
    */
  fromDate(date: Date): Time {
    return new Time(date);
  }
}

export default TimeFactory;
