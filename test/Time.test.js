import Time from '../src/Time';

describe('Time', () => {
	it('Should return a unix timestamp as a whole number', () => {
		const time = new Time(new Date());

		expect(Number.isInteger(time.toTimestamp())).toBeTruthy();
	});

	it('Should return the day of the month', () => {
		const time = new Time(new Date('04-06-2020'));

		expect(time.getDay()).toEqual(6);
	});
});