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
        /D{2}/g,
        this.formatNumber(time.getDay(), true),
    );
    formatted = formatted.replace(
        /D{1}/g,
        this.formatNumber(time.getDay(), false),
    );
    return formatted;
  }

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string) {
    return this.parsePaddedAndUnpaddedUnits(parsable, format, 'D');
  }
}

export default Day;
