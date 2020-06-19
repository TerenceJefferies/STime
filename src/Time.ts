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
		return Math.trunc((this.root.getTime() / 1000));
	}
}

export default Time;