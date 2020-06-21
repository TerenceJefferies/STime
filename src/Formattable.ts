/**
 * Makes a class formattable
 */
abstract class Formattable {
  abstract root: Date;
  abstract getMinutes(): number;
  abstract getHours(): number;
  abstract getSeconds(): number;
  abstract getDay(): number;
  abstract getMonth(): number;
  abstract getYear(): number;

  /**
   * Format the date into a string
   * @example
   * ```javascript
   * time.format('DD/MM/YYYY'); // 01-01-2020
   * ```
   * @param {string} format Format to turn the date into.
   * @return {string} Formatted date
   */
  format(format: string): string {
    let formatted = this.formatYears(format);
    formatted = this.formatDays(formatted);
    formatted = this.formatMonths(formatted);
    formatted = this.formatHours(formatted);
    formatted = this.formatMinutes(formatted);
    formatted = this.formatSeconds(formatted);
    return formatted;
  }

  /**
   * Update a format to include seconds
   * @param {string} format Format to check for seconds
   * @return {string} Formatted string including seconds
   */
  private formatSeconds(format: string): string {
    let formatted = format.replace(/S{2}/g, this.formatNumber(this.getSeconds(), true));
    formatted = formatted.replace(/S{1}/g, this.formatNumber(this.getSeconds(), false));
    return formatted;
  }

  /**
   * Update a format to include minutes
   * @param {string} format Format to check for minutes
   * @return {string} Formatted string including minutes
   */
  private formatMinutes(format: string): string {
    let formatted = format.replace(/I{2}/g, this.formatNumber(this.getMinutes(), true));
    formatted = formatted.replace(/I{1}/g, this.formatNumber(this.getMinutes(), false));
    return formatted;
  }

  /**
   * Update a format to include hours
   * @param {string} format Format to check for hours
   * @return {string} Formatted string including hours
   */
  private formatHours(format: string): string {
    let formatted = format.replace(/H{2}/g, this.formatNumber(this.getHours(), true));
    formatted = formatted.replace(/H{1}/g, this.formatNumber(this.getHours(), false));
    return formatted;
  }

  /**
   * Update a format to include days
   * @param {string} format Format to check for days
   * @return {string} Formatted string including days
   */
  private formatDays(format: string): string {
    let formatted = format.replace(/D{2}/g, this.formatNumber(this.getDay(), true));
    formatted = formatted.replace(/D{1}/g, this.formatNumber(this.getDay(), false));
    return formatted;
  }

  /**
   * Update a format to include months
   * @param {string} format Format to check for months
   * @return {string} Formatted string including months
   */
  private formatMonths(format: string): string {
    let formatted = format.replace(/M{4}/g, this.getMonthName('long'));
    formatted = formatted.replace(/M{3}/g, this.getMonthName('short'));
    formatted = formatted.replace(/M{2}/g, this.formatNumber(this.getMonth(), true));
    formatted = formatted.replace(/M{1}/g, this.formatNumber(this.getMonth(), false));
    return formatted;
  }

  /**
   * Get a month name in a particular format
   * @param {string} type long or short
   * @return {string} Formatted string including months
   */
  private getMonthName(type: string): string {
    return this.root.toLocaleString('default', { month: type });
  }

  /**
   * Update a format to include years
   * @param {string} format Format to update
   * @return {string} Formatted string including years
   */
  private formatYears(format: string): string {
    const year = this.getYear().toString();
    let formatted = format.replace(/Y{4}/g, year);
    formatted = formatted.replace(/Y{2}/g, year.substring(2, year.length));
    return formatted;
  }

  /**
   * Format a number to a string and have it include or exclude
   * leading zeros
   * @param {number} number Number to format
   * @param {boolean} leadingZero True if leading zeros should be included
   * false otherwise
   * @return {string} Formatted number
   */
  private formatNumber(number: number, leadingZero: boolean): string {
    if (leadingZero) {
      if (number < 10) {
        return '0' + number.toString();
      }
    }

    return number.toString();
  }
}

export default Formattable;