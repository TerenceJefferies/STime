import Difference from './Difference';
import Time from '../Time';

class DifferenceCalculator {
	calculate(timeOne: Time, timeTwo: Time): Difference {
		return new Difference(
			this.getDifferenceInSeconds(timeOne, timeTwo)
		);
	}

	getDifferenceInSeconds(timeOne: Time, timeTwo: Time): number {
		const difference = (timeOne.toTimestamp() - timeTwo.toTimestamp());
		return Math.abs(difference);
	}
}

export default DifferenceCalculator;