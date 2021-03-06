import Format from '../Format';
import Formattable from '../Formattable';
import Formats from './Formats';

/**
 * AmPm formatting
 */
class AmPm extends Format {
    /**
   * @inheritdoc
   */
    parse(parsable: string, format: string): number {
        throw new Error('Method not implemented.');
    }

    /**
   * @inheritdoc
   */
    format(time: Formattable, format: string): string {
        const amOrPm = this.getAmOrPm(time);
        let formatted = format.replace(
            new RegExp(Formats.AM_PM_UPPERCASE, 'g'),
            amOrPm.toUpperCase(),
        );
        formatted = formatted.replace(
            new RegExp(Formats.AM_PM_LOWERCASE, 'g'),
            amOrPm.toLowerCase(),
        );
        return formatted;
    }

    /**
   * Determine if the AM/PM symbol is AM or PM
   * @param {Formattable} time Time to determine with
   * @return {string} AM or PM
   */
    private getAmOrPm(time: Formattable): string {
        if (time.getHours() < 12) {
            return 'AM';
        }

        return 'PM';
    }
}

export default AmPm;
