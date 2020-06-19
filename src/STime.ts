import TimeFactory from './TimeFactory';
import Time from './Time';

class STime {
	readonly timeFactory: TimeFactory;

	/**
	* Create a new instance of STime
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
	* *Example Usage:*
	* ```
	* const date = new Date();
	* const time = stime.fromDate(date);
	* ```
	* @return Time created from the date provided
	*/
	fromDate(date: Date): Time {
		return this.timeFactory.fromDate(date);
	}
}

export default STime;