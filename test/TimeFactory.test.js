import TimeFactory from '../src/TimeFactory';

describe('TimeFactory', () => {
	it('Should return an instance of time on the current date', () => {
		const factory = new TimeFactory();
		const fixture = new Date();
		
		const time = factory.create();

		expect(
			time.root.getDay() === fixture.getDay()
			&& time.root.getMonth() === fixture.getMonth()
			&& time.root.getFullYear() === fixture.getFullYear()
		).toBeTruthy();
	});
});