import Unit from '../Unit';
import Time from '../Time';

/**
 * Minute unit of time
 */
class Minute implements Unit {
  /**
   * @inheritdoc
   */
  createIn(time: Time, units: number): Time {
    const date = new Date(time.toTimestamp() * 1000);
    date.setMinutes(date.getMinutes() + units);
    return new Time(date);
  }
}

export default Minute;
