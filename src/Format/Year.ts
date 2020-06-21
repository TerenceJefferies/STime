import Format from '../Format';
import Formattable from '../Formattable';

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
}

export default Year;
