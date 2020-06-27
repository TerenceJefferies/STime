import Format from '../Format';
import Formattable from '../Formattable';

/**
 * Hour format
 */
class Hour extends Format {
  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    let formatted = format.replace(
        /H{2}/g,
        this.formatNumber(time.getHours(), true),
    );
    formatted = formatted.replace(
        /H{1}/g,
        this.formatNumber(time.getHours(), false),
    );
    return formatted;
  }

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    return this.parsePaddedAndUnpaddedUnits(parsable, format, 'H');
  }
}

export default Hour;
