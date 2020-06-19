import TimeFactory from './TimeFactory';
import Time from './Time';

class STime {
	readonly timeFactory: TimeFactory;

	/**
	* Create a new STime instance
	*/
	constructor(timeFactory: TimeFactory) {
		this.timeFactory = timeFactory;
	}

	/**
	* Create a new representation of time at the current date and time
	* @return Time The current time
	*/
	now(): Time {
		return this.timeFactory.create();
	}

	/**
	* Create a new Time from a native Date
	* @return Time
	*/
	fromDate(date: Date): Time {
		return this.timeFactory.fromDate(date);
	}
}

export default STime;