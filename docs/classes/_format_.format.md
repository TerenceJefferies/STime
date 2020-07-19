[stime](../README.md) › [Globals](../globals.md) › ["Format"](../modules/_format_.md) › [Format](_format_.format.md)

# Class: Format

## Hierarchy

* **Format**

  ↳ [Year](_format_year_.year.md)

  ↳ [Month](_format_month_.month.md)

  ↳ [Day](_format_day_.day.md)

  ↳ [Hour](_format_hour_.hour.md)

  ↳ [Second](_format_second_.second.md)

  ↳ [Minute](_format_minute_.minute.md)

  ↳ [AmPm](_format_ampm_.ampm.md)

  ↳ [DayOfWeek](_format_dayofweek_.dayofweek.md)

## Index

### Methods

* [format](_format_.format.md#abstract-format)
* [formatNumber](_format_.format.md#protected-formatnumber)
* [parse](_format_.format.md#abstract-parse)
* [parsePaddedAndUnpaddedUnits](_format_.format.md#protected-parsepaddedandunpaddedunits)

## Methods

### `Abstract` format

▸ **format**(`time`: [Time](_time_.time.md), `format`: string): *string*

*Defined in [Format.ts:17](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format.ts#L17)*

Format a time into a format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | [Time](_time_.time.md) | Time to format |
`format` | string | Format to convert into |

**Returns:** *string*

Formatted string

___

### `Protected` formatNumber

▸ **formatNumber**(`number`: number, `leadingZero`: boolean): *string*

*Defined in [Format.ts:27](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format.ts#L27)*

Format a number to a string and have it include or exclude
leading zeros

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`number` | number | Number to format |
`leadingZero` | boolean | True if leading zeros should be included false otherwise |

**Returns:** *string*

Formatted number

___

### `Abstract` parse

▸ **parse**(`parsable`: string, `format`: string): *number*

*Defined in [Format.ts:9](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format.ts#L9)*

Parse a string into a time for the current format

**Parameters:**

Name | Type |
------ | ------ |
`parsable` | string |
`format` | string |

**Returns:** *number*

Units found in string

___

### `Protected` parsePaddedAndUnpaddedUnits

▸ **parsePaddedAndUnpaddedUnits**(`parsable`: string, `format`: string, `token`: string): *number*

*Defined in [Format.ts:43](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format.ts#L43)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parsable` | string | - |
`format` | string | - |
`token` | string |   |

**Returns:** *number*
