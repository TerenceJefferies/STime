import Format from '../Format';
import Formattable from '../Formattable';
import Formats from './Formats';

/**
 * Second format
 */
class Second extends Format {
    /**
   * @inheritdoc
   */
    format(time: Formattable, format: string): string {
        let formatted = format.replace(
            new RegExp(Formats.SECOND_LEADING_ZERO, 'g'),
            this.formatNumber(time.getSeconds(), true),
        );
        formatted = formatted.replace(
            new RegExp(Formats.SECOND_NUMBER, 'g'),
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
