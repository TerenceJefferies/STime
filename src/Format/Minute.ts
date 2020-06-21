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
        /I{2}/g,
        this.formatNumber(time.getMinutes(), true),
    );
    formatted = formatted.replace(
        /I{1}/g,
        this.formatNumber(time.getMinutes(), false),
    );
    return formatted;
  }
}

export default Minute;
