import Difference from '../../src/Difference/Difference';

describe('Difference', () => {
	it('Should return the number of seconds', () => {
		const fixture = 30;
		const diff = new Difference(30);

		expect(diff.getTotalSeconds()).toEqual(30);
	});

	it('Should return the number of minutes', () => {
		const diff = new Difference(300);

		expect(diff.getTotalMinutes()).toEqual(5);
	});

	it('Should return the number of hours', () => {
		const diff = new Difference(7200);

		expect(diff.getTotalHours()).toEqual(2);
	});

	it('Should return the number of days', () => {
		const diff = new Difference((3600 * 24 * 3));

		expect(diff.getTotalDays()).toEqual(3);
	});

	it('Should return the minutes as an integer', () => {
		const diff = new Difference(299);

		expect(Number.isInteger(diff.getTotalMinutes())).toBeTruthy();
	});

	it('Should return the hours as an integer', () => {
		const diff = new Difference(7234);

		expect(Number.isInteger(diff.getTotalHours())).toBeTruthy();
	});

	it('Should return the days as an integer', () => {
		const diff = new Difference((3600 * 24 * 1.5));

		expect(Number.isInteger(diff.getTotalDays())).toBeTruthy();
	});
});