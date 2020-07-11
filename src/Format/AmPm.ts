import Format from '../Format';
import Formattable from '../Formattable';

/**
 * AmPm formatting
 */
class AmPm extends Format {
  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    throw new Error('Method not implemented.');
  }

  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    const amOrPm = this.getAmOrPm(time);
    let formatted = format.replace(
        /:amPmUpper:/g,
        amOrPm.toUpperCase(),
    );
    formatted = formatted.replace(
        /:amPmLower:/g,
        amOrPm.toLowerCase(),
    );
    return formatted;
  }

  /**
   * Determine if the AM/PM symbol is AM or PM
   * @param {Formattable} time Time to determine with
   * @return {string} AM or PM
   */
  private getAmOrPm(time: Formattable): string {
    if (time.getHours() < 12) {
      return 'AM';
    }

    return 'PM';
  }
}

export default AmPm;
