import Format from '../Format';
import Formattable from '../Formattable';

/**
 * Month format
 */
class Month extends Format {
  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    let formatted = format.replace(/M{4}/g, this.getMonthName('long', time));
    formatted = formatted.replace(
        /M{3}/g,
        this.getMonthName('short', time),
    );
    formatted = formatted.replace(
        /M{2}/g,
        this.formatNumber(time.getMonth(), true),
    );
    formatted = formatted.replace(
        /M{1}/g,
        this.formatNumber(time.getMonth(), false),
    );
    return formatted;
  }

  /**
   * Get a month name in a particular format
   * @param {string} type long or short
   * @param {Formattable} time Time to format from
   * @return {string} Formatted string including months
   */
  private getMonthName(type: string, time: Formattable): string {
    return time.root.toLocaleString('default', {month: type});
  }
}

export default Month;
