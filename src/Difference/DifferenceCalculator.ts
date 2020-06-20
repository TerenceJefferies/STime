import Difference from './Difference';
import Time from '../Time';

class DifferenceCalculator {

	/**
	* Calculate the difference between two times
	* @return Difference between two times
	*/
	calculate(timeOne: Time, timeTwo: Time): Difference {
		return new Difference(
			this.getDifferenceInSeconds(timeOne, timeTwo)
		);
	}

	/**
	* Get the difference between two times in seconds
	* @return Total number of seconds between the two times
	*/
	getDifferenceInSeconds(timeOne: Time, timeTwo: Time): number {
		const difference = (timeOne.toTimestamp() - timeTwo.toTimestamp());
		return Math.abs(difference);
	}
}

export default DifferenceCalculator;