import Time from './Time';

interface Unit {
  /**
   * Create a new time, separated from the current time by the offset
   * @param {Time} time Time to modify
   * @param {number} offset Number of units to modify the date by
   * @return {Time} Resultant time
   */
  createIn(time: Time, units: number): Time;
}

export default Unit;
