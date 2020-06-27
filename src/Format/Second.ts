import Format from '../Format';
import Formattable from '../Formattable';

/**
 * Second format
 */
class Second extends Format {
  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    let formatted = format.replace(
        /S{2}/g,
        this.formatNumber(time.getSeconds(), true),
    );
    formatted = formatted.replace(
        /S{1}/g,
        this.formatNumber(time.getSeconds(), false),
    );
    return formatted;
  }

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    return this.parsePaddedAndUnpaddedUnits(parsable, format, 'S');
  }
}

export default Second;
