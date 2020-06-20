import Time from '../Time';

abstract class DifferenceYearAware {
    abstract timeOne: Time;

    abstract timeTwo: Time;

    /**
     * Get total years between two times
     * @return Number of years between the two times
     */
    getTotalYears(): number {
        return Math.abs((this.timeOne.getYear() - this.timeTwo.getYear()));
    }
}

export default DifferenceYearAware;