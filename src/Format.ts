import Time from './Time';

abstract class Format {
  /**
   * Parse a string into a time for the current format
   * @param {string} string String to parse
   * @return {Time} Resultant time
   */
  // parse(string: string): Time;

  /**
   * Format a time into a format
   * @param {Time} time Time to format
   * @param {string} format Format to convert into
   * @return {string} Formatted string
   */
  abstract format(time: Time, format: string): string;

  /**
   * Format a number to a string and have it include or exclude
   * leading zeros
   * @param {number} number Number to format
   * @param {boolean} leadingZero True if leading zeros should be included
   * false otherwise
   * @return {string} Formatted number
   */
  protected formatNumber(number: number, leadingZero: boolean): string {
    if (leadingZero) {
      if (number < 10) {
        return '0' + number.toString();
      }
    }

    return number.toString();
  }
}

export default Format;