import Time from './Time';

class TimeFactory {
	/**
	* Create a new time at the current date
	*/
	create(): Time {
		return new Time(new Date());
	}
}

export default TimeFactory;