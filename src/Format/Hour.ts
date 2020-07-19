import Format from '../Format';
import Formattable from '../Formattable';
import Formats from './Formats';

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
  private applyTwentyFourHourFormatting(
      time: Formattable,
      format: string,
  ): string {
    let formatted = format.replace(
        new RegExp(Formats.HOUR_TWENTYFOUR_LEADING_ZERO, 'g'),
        this.formatNumber(time.getHours(), true),
    );
    formatted = formatted.replace(
        new RegExp(Formats.HOUR_TWENTYFOUR_NUMBER, 'g'),
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
        new RegExp(Formats.HOUR_TWELVE_LEADING_ZERO, 'g'),
        this.formatNumber(hour, true),
    );
    formatted = formatted.replace(
        new RegExp(Formats.HOUR_TWELVE_NUMBER, 'g'),
        this.formatNumber(hour, false),
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
