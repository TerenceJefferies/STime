import Time from './Time';

class TimeFactory {
	/**
	* Create a new time at the current date
	*/
	create(): Time {
		return new Time(new Date());
	}

	/**
	* Retrieve a new instance from a javascript date
	* @return Time
	*/
	fromDate(date: Date): Time {
		return new Time(date);
	}
}

export default TimeFactory;