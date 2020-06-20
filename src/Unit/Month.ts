import Unit from '../Unit';
import Time from '../Time';

/**
 * Month unit of time
 */
class Month implements Unit {
  /**
   * @inheritdoc
   */
  createIn(time: Time, units: number): Time {
    const date = new Date(time.toTimestamp() * 1000);
    date.setMonth(date.getMonth() + units);
    return new Time(date);
  }
}

export default Month;
