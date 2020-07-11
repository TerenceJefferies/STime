import Format from '../Format';
import Formattable from '../Formattable';

/**
 * Day format
 */
class Day extends Format {
  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    let formatted = format.replace(
        /:leadingDay:/g,
        this.formatNumber(time.getDay(), true),
    );
    formatted = formatted.replace(
        /:day:/g,
        this.formatNumber(time.getDay(), false),
    );
    return formatted;
  }

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    return this.parsePaddedAndUnpaddedUnits(parsable, format, 'D');
  }
}

export default Day;
