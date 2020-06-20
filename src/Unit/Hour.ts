import Unit from '../Unit';
import Time from '../Time';

class Hour implements Unit {
  /**
   * @inheritdoc
   */
  createIn(time: Time, units: number): Time {
    const date = new Date(time.toTimestamp() * 1000);
    date.setHours(date.getHours() + units);
    return new Time(date);
  }
}

export default Hour;