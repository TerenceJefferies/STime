import Format from '../Format';
import Formattable from '../Formattable';
import TimeFromBuilder from '../TimeFromBuilder';

/**
 * Year format
 */
class Year extends Format {
  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    const year = time.getYear().toString();
    let formatted = format.replace(/Y{4}/g, year);
    formatted = formatted.replace(/Y{2}/g, year.substring(2, year.length));
    return formatted;
  }

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    const longYearPosition = format.indexOf('Y'.repeat(4));
    if (longYearPosition > -1) {
      return parseInt(parsable.substr(longYearPosition, 4));
    }

    return 0;
  }
}

export default Year;
