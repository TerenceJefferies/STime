import Unit from '../Unit';
import Time from '../Time';

/**
 * Second unit of time
 */
class Second implements Unit {
  /**
   * @inheritdoc
   */
  createIn(time: Time, units: number): Time {
    const date = new Date(time.toTimestamp() * 1000);
    date.setSeconds(date.getSeconds() + units);
    return new Time(date);
  }
}

export default Second;