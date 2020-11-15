import Format from '../Format';
import Formattable from '../Formattable';
import TimeFromBuilder from '../TimeFromBuilder';
import Formats from './Formats';

/**
 * Year format
 */
class Year extends Format {
    /**
   * @inheritdoc
   */
    format(time: Formattable, format: string): string {
        const year = time.getYear().toString();
        let formatted = format.replace(
            new RegExp(Formats.FOUR_DIGIT_YEAR, 'g'),
            year,
        );
        formatted = formatted.replace(
            new RegExp(Formats.TWO_DIGIT_YEAR, 'g'),
            year.substring(2, year.length),
        );
        return formatted;
    }

    /**
   * @inheritdoc
   */
    parse(parsable: string, format: string): number {
        const longYearPosition = format.indexOf('Y'.repeat(4));
        if (longYearPosition > -1) {
            return parseInt(parsable.substr(longYearPosition, 4));
        }

        return 0;
    }
}

export default Year;
