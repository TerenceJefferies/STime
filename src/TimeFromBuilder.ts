import Unit from './Unit';
import Day from './Unit/Day';
import Time from './Time';
import Second from './Unit/Second';
import Minute from './Unit/Minute';
import Hour from './Unit/Hour';
import Month from './Unit/Month';
import Year from './Unit/Year';

/**
 * Builds a new time
 * @example
 * ```javascript
 * const builder = new TimeFromBuilder(1);
 * const time = builder.days().from().now();
 * ```
 */
class TimeFromBuilder {
    readonly FUTURE = 1;
    readonly PAST = 2;

    fromCurrent: number;

    unit: Unit | undefined;

    direction: number | undefined;

    origin: Time | undefined;

    /**
     * Create a new TimeFromBuilder
     * @param {number} fromCurrent Number of units to
     * separate from the current date
     */
    constructor(fromCurrent: number);
    constructor(fromCurrent: number, unit: Unit);
    constructor(fromCurrent: number, unit: Unit, direction: number);
    constructor(fromCurrent: number, unit?: Unit, direction?: number, origin?: Time);
    constructor(fromCurrent: number, unit: Unit, direction?: number, origin?: Time);
    constructor(fromCurrent: number, unit: Unit, direction: number, origin: Time);
    constructor(fromCurrent: number, unit?: Unit, direction?: number, origin?: Time) {
        this.fromCurrent = fromCurrent;
        this.unit = unit;
        this.direction = direction;
        this.origin = origin;
    }

    /**
     * Configure number of days to offset by
     * @return {TimeFromBuilder}
     */
    days(): TimeFromBuilder {
        return new TimeFromBuilder(
            this.fromCurrent,
            new Day(),
            this.direction,
            this.origin,
        );
    }

    /**
     * Configure number of seconds to offset by
     * @return {TimeFromBuilder}
     */
    seconds(): TimeFromBuilder {
        return new TimeFromBuilder(
            this.fromCurrent,
            new Second(),
            this.direction,
            this.origin,
        );
    }

    /**
     * Configures the minute context
     * @return {TimeFromBuilder}
     */
    minutes(): TimeFromBuilder {
        return new TimeFromBuilder(
            this.fromCurrent,
            new Minute(),
            this.direction,
            this.origin,
        );
    }

    /**
     * Configures the hour context
     * @return {TimeFromBuilder}
     */
    hours(): TimeFromBuilder {
        return new TimeFromBuilder(
            this.fromCurrent,
            new Hour(),
            this.direction,
            this.origin,
        );
    }

    /**
     * Configures the month context
     * @return {TimeFromBuilder}
     */
    months(): TimeFromBuilder {
        return new TimeFromBuilder(
            this.fromCurrent,
            new Month(),
            this.direction,
            this.origin,
        );
    }

    /**
     * Configures the year context
     * @return {TimeFromBuilder}
     */
    years(): TimeFromBuilder {
        return new TimeFromBuilder(
            this.fromCurrent,
            new Year(),
            this.direction,
            this.origin,
        );
    }

    /**
     * Create a new TimeFromBuilder configured in a future context
     * @return {TimeFromBuilder}
     */
    from(): TimeFromBuilder {
        if (!this.unit) {
            throw new Error('Must provide type before specifying direction');
        }

        return new TimeFromBuilder(
            this.fromCurrent,
            this.unit,
            this.FUTURE,
            this.origin,
        );
    }

    /**
     * Configured TimeFromBuilder in a past context
     * @return {TimeFromBuilder}
     */
    before(): TimeFromBuilder {
        if (!this.unit) {
            throw new Error('Must provide type before specifying direction');
        }

        return new TimeFromBuilder(
            this.fromCurrent,
            this.unit,
            this.PAST,
            this.origin,
        );
    }

    /**
     * Return configured time starting from now
     * @return {Time}
     */
    now(): Time {
        if (!this.unit || !this.direction) {
            throw new Error(
                'Called final chain method before fully configuring instance',
            );
        }

        return (new TimeFromBuilder(
            this.fromCurrent,
            this.unit,
            this.direction,
            new Time(new Date()),
        )).get();
    }

    /**
     * Get the configured time from the specified time
     * @param {Time} time
     * @return {Time}
     */
    time(time: Time): Time {
        if (!this.unit || !this.direction) {
            throw new Error('Called final chain method before fully configuring instance');
        }

        return (new TimeFromBuilder(
            this.fromCurrent,
            this.unit,
            this.direction,
            time,
        )).get();
    }

    /**
     * Get the resultant time
     * @return {Time} Created time
     */
    get(): Time {
        if (!this.unit || !this.origin) {
            throw new Error('Must provide a unit (eg .days()) before attempting to get');
        }

        const offset = (this.direction == this.PAST) ? -this.fromCurrent : this.fromCurrent;
        return this.unit.createIn(this.origin, offset);
    }

    /**
     * @return {Time}
     */
    inFuture(): Time {
        return this.from().get();
    }

    /**
     * @return {Time}
     */
    inPast(): Time {
        return this.before().get();
    }
}

export default TimeFromBuilder;
