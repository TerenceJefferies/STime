import Generator from '../src/Generator';
import TimeFactory from '../src/TimeFactory';

describe('Generator', () => {
  it('Should returns a time on the current day and in the current hour', () => {
    const generator = new Generator(new TimeFactory());
    const time = generator.now();

    const currentDate = new Date();

    expect(
      time.getDay() === currentDate.getDate() && 
      time.getHours() === currentDate.getHours()
    ).toBeTruthy();
  });

  it('Should return a date yesterday', () => {
    const generator = new Generator(new TimeFactory());
    const time = generator.yesterday();

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);

    expect(time.getDay() === currentDate.getDate()).toBeTruthy();
  });

  it('Should return a date tomorrow', () => {
    const generator = new Generator(new TimeFactory());
    const time = generator.tomorrow();

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    expect(time.getDay() === currentDate.getDate()).toBeTruthy();
  });

  it('Should return a date on the specified date', () => {
    const generator = new Generator(new TimeFactory());
    const currentDate = new Date();
    
    const time = generator.fromDate(currentDate);

    expect(time.getDay()).toStrictEqual(currentDate.getDate());
    expect(time.getMonth()).toStrictEqual(currentDate.getMonth() + 1);
    expect(time.getYear()).toStrictEqual(currentDate.getFullYear());
  });
});