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

  /**
   * 
   * @param parsable 
   * @param format 
   * @param token 
   */
  protected parsePaddedAndUnpaddedUnits(parsable: string, format: string, token: string) {
    let longSecondsPosition = format.indexOf(token.repeat(2));
    if (longSecondsPosition > -1) {
      return parseInt(parsable.substr(longSecondsPosition, 2));
    }

    let shortSecondsPosition = format.indexOf(token);
    if (shortSecondsPosition > -1) {
      const firstSecondPart = parsable.substr(shortSecondsPosition, 1);
      if (parseInt(parsable[shortSecondsPosition + 1])) {
        return parseInt(firstSecondPart + parsable[shortSecondsPosition + 1]);
      }
      return parseInt(firstSecondPart);
    }

    return 0;
  }
}

export default Format;