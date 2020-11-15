import Format from '../Format';
import Formattable from '../Formattable';
import Formats from './Formats';

/**
 * Minute format
 */
class Minute extends Format {
    /**
   * @inheritdoc
   */
    format(time: Formattable, format: string): string {
        let formatted = format.replace(
            new RegExp(Formats.MINUTE_LEADING_ZERO, 'g'),
            this.formatNumber(time.getMinutes(), true),
        );
        formatted = formatted.replace(
            new RegExp(Formats.MINUTE_NUMBER, 'g'),
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
