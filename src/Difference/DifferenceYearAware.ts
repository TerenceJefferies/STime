import Time from '../Time';

/**
 * Making a difference year aware
 */
abstract class DifferenceYearAware {
  abstract timeOne: Time;

  abstract timeTwo: Time;

  /**
   * Get total years between two times
   * @return {number} Number of years between the two times
   */
  getTotalYears(): number {
    return Math.abs((this.timeOne.getYear() - this.timeTwo.getYear()));
  }
}

export default DifferenceYearAware;
