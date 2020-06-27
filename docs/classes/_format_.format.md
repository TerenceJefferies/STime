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

## Index

### Methods

* [format](_format_.format.md#abstract-format)
* [formatNumber](_format_.format.md#protected-formatnumber)
* [parsePaddedAndUnpaddedUnits](_format_.format.md#protected-parsepaddedandunpaddedunits)

## Methods

### `Abstract` format

▸ **format**(`time`: [Time](_time_.time.md), `format`: string): *string*

*Defined in [Format.ts:17](https://github.com/TerenceJefferies/STime/blob/b69ea6e/src/Format.ts#L17)*

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

*Defined in [Format.ts:27](https://github.com/TerenceJefferies/STime/blob/b69ea6e/src/Format.ts#L27)*

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

### `Protected` parsePaddedAndUnpaddedUnits

▸ **parsePaddedAndUnpaddedUnits**(`parsable`: string, `format`: string, `token`: string): *number*

*Defined in [Format.ts:43](https://github.com/TerenceJefferies/STime/blob/b69ea6e/src/Format.ts#L43)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parsable` | string | - |
`format` | string | - |
`token` | string |   |

**Returns:** *number*
