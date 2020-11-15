import Format from '../Format';
import Formattable from '../Formattable';
import Formats from './Formats';

/**
 * Day format
 */
class Day extends Format {
    /**
   * @inheritdoc
   */
    format(time: Formattable, format: string): string {
        let formatted = format.replace(
            new RegExp(Formats.DAY_NUMBER_LEADING_ZERO, 'g'),
            this.formatNumber(time.getDay(), true),
        );
        formatted = formatted.replace(
            new RegExp(Formats.DAY_NUMBER, 'g'),
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
