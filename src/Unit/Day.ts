import Unit from '../Unit';
import Time from '../Time';

/**
 * Day unit of time
 */
class Day implements Unit {
  /**
   * @inheritdoc
   */
  createIn(time: Time, units: number): Time {
    const date = new Date(time.toTimestamp() * 1000);
    date.setDate(date.getDate() + units);
    return new Time(date);
  }
}

export default Day;
