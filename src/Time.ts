import Formattable from './Formattable';

/**
 * A representation of time
 */
class Time extends Formattable {
    /**
     * @var {Date} root Native date
     */
    readonly root: Date;

    /**
     * Create a new Time instance
     * @param {Date} root Native date to base the time on
     */
    constructor(root: Date) {
      super();
      this.root = root;
    }

    /**
     * Get unix timestamp representation
     * @example
     * `const unixTimestamp = time.toTimestamp();`
     * @return {number} Unix timetamp
     */
    toTimestamp(): number {
      return parseInt((this.root.getTime() / 1000).toFixed(0));
    }

    /**
     * Get the day of the month
     * @return {number} Day of the month
     */
    getDay(): number {
      return this.root.getDate();
    }

    /**
     * Get the month number
     * @return {number} Month number from 1 to 12
     */
    getMonth(): number {
        return (this.root.getMonth() + 1);
    }

    /**
     * Get the year
     * @return {number} 4-digit representation of the year
     */
    getYear(): number {
        return this.root.getFullYear();
    }

    /**
     * Get the seconds
     * @return {number} Seconds
     */
    getSeconds(): number {
        return this.root.getSeconds();
    }

    /**
     * Get minutes
     * @return {number} Minutes
     */
    getMinutes(): number {
      return this.root.getMinutes();
    }

    /**
     * Get hours
     * @return {number} Hours
     */
    getHours(): number {
      return this.root.getHours();
    }
}

export default Time;
