import TimeFactory from './TimeFactory';
import Time from './Time';

class STime {
	readonly timeFactory: TimeFactory;

	/**
	* A new STime
	*/
	constructor(timeFactory: TimeFactory) {
		this.timeFactory = timeFactory;
	}

	/**
	* Get the current time
	* *Example Usage:* 
	* ```
	* const currentTime = stime.now();
	* console.log(currentTime.getTimestamp());
	* ```
	* @return Current time
	*/
	now(): Time {
		return this.timeFactory.create();
	}

	/**
	* Create a new Time from a native Date
	* @return Time representing the date provided
	*/
	fromDate(date: Date): Time {
		return this.timeFactory.fromDate(date);
	}
}

export default STime;