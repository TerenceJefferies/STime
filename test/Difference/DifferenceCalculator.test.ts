import DifferenceCalculator from '../../src/Difference/DifferenceCalculator';
import Time from '../../src/Time';

describe('DifferenceCalculator', () => {
	it('Should return the difference in seconds', () => {
		const calculator = new DifferenceCalculator();
		const timeOne = new Time(new Date('01-01-2020 13:00:00'));
		const timeTwo = new Time(new Date('01-01-2020 13:00:30'));

		const seconds = calculator.getDifferenceInSeconds(timeOne, timeTwo);

		expect(seconds).toEqual(30);
	});
});