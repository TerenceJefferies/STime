class Time {
	readonly root: Date;

	/**
	* Create a new Time instance
	*/
	constructor(root: Date) {
		this.root = root;
	}

	/**
	* Return the unix timestamp representation of the current time
	* @return Unix timestamp
	*/
	toTimestamp(): Number {
		return parseInt((this.root.getTime() / 1000).toFixed(0));
	}

	/**
	* Get the current day of the month
	* @return The current day of the month
	*/
	getDay(): Number {
		return this.root.getDate();
	}
}

export default Time;