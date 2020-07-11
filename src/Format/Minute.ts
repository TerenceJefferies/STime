import Format from '../Format';
import Formattable from '../Formattable';

/**
 * Minute format
 */
class Minute extends Format {
  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    let formatted = format.replace(
        /:leadingMinutes:/g,
        this.formatNumber(time.getMinutes(), true),
    );
    formatted = formatted.replace(
        /:minutes:/g,
        this.formatNumber(time.getMinutes(), false),
    );
    return formatted;
  }

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    return this.parsePaddedAndUnpaddedUnits(parsable, format, 'I');
  }
}

export default Minute;
