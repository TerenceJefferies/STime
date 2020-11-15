import Unit from '../Unit';
import Time from '../Time';

/**
 * Year unit of time
 */
class Year implements Unit {
    /**
   * @inheritdoc
   */
    createIn(time: Time, units: number): Time {
        const date = new Date(time.toTimestamp() * 1000);
        date.setFullYear(date.getFullYear() + units);
        return new Time(date);
    }
}

export default Year;
