class Time {
	readonly root: Date;

	/**
	* Create a new Time instance
	* @param root Native date to base the time on
	*/
	constructor(root: Date) {
		this.root = root;
	}

	/**
	* Get unix timestamp representation
	* *Example Usage:*
	* ```
	* const unixTimestamp =time.toTimestamp();
	* ```
	* @return Unix timetamp
	*/
	toTimestamp(): Number {
		return parseInt((this.root.getTime() / 1000).toFixed(0));
	}

	/**
	* Get the day of the month
	* @return Day of the month
	*/
	getDay(): Number {
		return this.root.getDate();
	}

	/**
	* Get the month number
	* @return Month number from 1 to 12
	*/
	getMonth(): Number {
		return (this.root.getMonth() + 1);
	}

	/**
	* Get the year
	* @return 4-digit representation of the year
	*/
	getYear(): Number {
		return this.root.getFullYear();
	}
}

export default Time;