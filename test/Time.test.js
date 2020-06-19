import Time from '../src/Time';

describe('Time', () => {
	it('Should return a unix timestamp as a whole number', () => {
		const time = new Time(new Date());

		expect(Number.isInteger(time.toTimestamp())).toBeTruthy();
	});
});