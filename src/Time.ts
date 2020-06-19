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
	*/
	toTimestamp(): Number {
		return parseInt((this.root.getTime() / 1000).toFixed(0));
	}
}

export default Time;