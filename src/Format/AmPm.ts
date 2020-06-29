import Format from '../Format';
import Formattable from '../Formattable';

class AmPm extends Format {

  /**
   * @inheritdoc
   */
  parse(parsable: string, format: string): number {
    throw new Error("Method not implemented.");
  }

  /**
   * @inheritdoc
   */
  format(time: Formattable, format: string): string {
    const amOrPm = this.getAmOrPm(time);
    let formatted = format.replace(
        /P/g,
        amOrPm.toUpperCase(),
    );
    formatted = formatted.replace(
        /p/g,
        amOrPm.toLowerCase()
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