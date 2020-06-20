import Time from '../Time';
import DifferenceMonthAware from './DifferenceMonthAware';

class Difference extends DifferenceMonthAware {
	readonly differenceInSeconds: number;
	readonly timeOne: Time;
	readonly timeTwo: Time

	constructor(timeOne: Time, timeTwo: Time) {
		super();
		this.differenceInSeconds = Math.abs(timeOne.toTimestamp() - timeTwo.toTimestamp());
		this.timeOne = timeOne;
		this.timeTwo = timeTwo;
	}

	/**
	* Get total number of seconds between two times
	* @example
	* `difference.getTotalSeconds();`
	* @return Total number of seconds between two dates
	*/
	getTotalSeconds(): number {
		return this.differenceInSeconds;
	}

	/**
	* Get total minutes between dates
	* @return Total number of minutes between two times
	*/
	getTotalMinutes(): number {
		return Math.floor((this.differenceInSeconds / 60));
	}

	/**
	* Get total hours between two times
	* @return Total number of hours between two times
	*/
	getTotalHours(): number {
		return Math.floor((this.getTotalMinutes() / 60));
	}

	/**
	* Get total days between to times
	* @return Total number of days between two times
	*/
	getTotalDays(): number {
		return Math.floor((this.getTotalHours() / 24));
	}

	/**
	* Get total weeks between two times
	* @return Total number of weeks between two times
	*/
	getTotalWeeks(): number {
		return Math.floor((this.getTotalDays() / 7));
	}
}

export default Difference;