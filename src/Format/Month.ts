import Format from '../Format';
import Formattable from '../Formattable';

/**
 * Month format
 */
class Month extends Format {

  private readonly monthMap = [
    {
      longName: 'January',
      shortName: 'Jan',
      number: 1,
    }, {
      longName: 'February',
      shortName: 'Feb',
      number: 2,
    }, {
      longName: 'March',
      shortName: 'Mar',
      number: 3,
    }, {
      longName: 'April',
      shortName: 'Apr',
      number: 4,
    }, {
      longName: 'May',
      shortName: 'May',
      number: 5,
    }, {
      longName: 'June',
      shortName: 'Jun',
      number: 6,
    }, {
      longName: 'July',
      shortName: 'Jul',
      number: 7,
    }, {
      longName: 'August',
      shortName: 'Aug',
      number: 8,
    }, {
      longName: 'September',
      shortName: 'Sep',
      number: 9,
    }, {
      longName: 'October',
      shortName: 'Oct',
      number: 10,
    }, {
      longName: 'November',
      shortName: 'Nov',
      number: 11,
    }, {
      longName: 'December',
      shortName: 'Dec',
      number: 12,
    }
  ];

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
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    let longNameMonthPosition = format.indexOf('M'.repeat(4));
    if (longNameMonthPosition > -1) {
      return this.parseLongMonthNumberFromParsable(longNameMonthPosition, parsable);
    }

    let shortNameMonthPosition = format.indexOf('M'.repeat(3));
    if (shortNameMonthPosition > -1) {
      return this.parseShortMonthNumberFromParsable(longNameMonthPosition, parsable);
    }
    
    return this.parsePaddedAndUnpaddedUnits(parsable, format, 'M');
  }

  private parseShortMonthNumberFromParsable(position: number, parsable: string): number {
    const shortMonthName = this.parseMonthNameFromPosition(position, parsable);
    const mapEntry = this.monthMap.filter((entry) => {
      return entry.shortName.toUpperCase() == shortMonthName.toUpperCase();
    });

    if (!mapEntry || !mapEntry.length) {
      throw new Error('Invalid month name ' + shortMonthName);
    }

    return mapEntry[0].number;
  }

  private parseLongMonthNumberFromParsable(position: number, parsable: string): number {
    const longMonthName = this.parseMonthNameFromPosition(position, parsable);
    const mapEntry = this.monthMap.filter((entry) => {
      return entry.longName.toUpperCase() == longMonthName.toUpperCase();
    });

    if (!mapEntry || !mapEntry.length) {
      throw new Error('Invalid month name ' + longMonthName);
    }

    return mapEntry[0].number;
  }

  /**
   * Parse a month name starting at a position in the
   * parsable string.
   * @param {number} position
   * @param {string} parsable
   * @return {string} Long month name
   */
  private parseMonthNameFromPosition(position: number, parsable: string): string {
    const focusString = parsable.substring(position);
    const matches = focusString.match(/([a-zA-Z]+)(\s|$)/i);
    if (!matches) {
      throw new Error('Cannot find long month name in ' + parsable);
    }
    return matches[1];
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
