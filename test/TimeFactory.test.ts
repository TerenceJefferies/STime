import TimeFactory from '../src/TimeFactory';

describe('TimeFactory', () => {
    it('Should return an instance of time on the current date', () => {
      const factory = new TimeFactory();
      const fixture = new Date();
      
      const time = factory.create();

      expect(
        time.getDay() === fixture.getDate()
        && time.getMonth() === (fixture.getMonth() + 1)
        && time.getYear() === fixture.getFullYear()
      ).toBeTruthy();
    });

    it('Should return a date for yesterday', () => {
      const factory = new TimeFactory();

      const date = new Date();
      date.setDate(date.getDate() - 1);

      const time = factory.createForYesterday();

      expect(time.getDay()).toEqual(date.getDate());
    });

    it('Should return a date for tomorrow', () => {
      const factory = new TimeFactory();

      const date = new Date();
      date.setDate(date.getDate() + 1);

      const time = factory.createForTomorrow();

      expect(time.getDay()).toEqual(date.getDate());
    });
});