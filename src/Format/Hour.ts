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
    let formatted = this.applyTwentyFourHourFormatting(time, format);
    formatted = this.applyTwelveHourFormatting(time, formatted);
    return formatted;
  }

  /**
   * Apply twenty four hour formatting to a format
   * @param {Formattable} time Formattable entity to format
   * @param {string} format Format to use
   * @return {string} Formatted entity
   */
  private applyTwentyFourHourFormatting(time: Formattable, format: string): string {
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
   * Apply twelve hour formatting to a format
   * @param {Formattable} time Format an hour in twelve hour format
   * @param {string} format Format to use
   * @return {string} Formatted format
   */
  private applyTwelveHourFormatting(time: Formattable, format: string): string {
    let hour = time.getHours();
    if (hour > 12) {
      hour = (hour - 12);
    }

    let formatted = format.replace(
      /h{2}/g,
      this.formatNumber(hour, true)
    );
    formatted = formatted.replace(
      /h{1}/g,
      this.formatNumber(hour, false)
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
