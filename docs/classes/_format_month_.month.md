[stime](../README.md) › [Globals](../globals.md) › ["Format/Month"](../modules/_format_month_.md) › [Month](_format_month_.month.md)

# Class: Month

Month format

## Hierarchy

* [Format](_format_.format.md)

  ↳ **Month**

## Index

### Properties

* [monthMap](_format_month_.month.md#private-readonly-monthmap)

### Methods

* [format](_format_month_.month.md#format)
* [formatNumber](_format_month_.month.md#protected-formatnumber)
* [getMonthName](_format_month_.month.md#private-getmonthname)
* [parse](_format_month_.month.md#parse)
* [parseLongMonthNumberFromParsable](_format_month_.month.md#private-parselongmonthnumberfromparsable)
* [parseMonthNameFromPosition](_format_month_.month.md#private-parsemonthnamefromposition)
* [parsePaddedAndUnpaddedUnits](_format_month_.month.md#protected-parsepaddedandunpaddedunits)
* [parseShortMonthNumberFromParsable](_format_month_.month.md#private-parseshortmonthnumberfromparsable)

## Properties

### `Private` `Readonly` monthMap

• **monthMap**: *object[]* = [
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
    },
  ]

*Defined in [Format/Month.ts:8](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format/Month.ts#L8)*

## Methods

###  format

▸ **format**(`time`: [Formattable](_formattable_.formattable.md), `format`: string): *string*

*Overrides [Format](_format_.format.md).[format](_format_.format.md#abstract-format)*

*Defined in [Format/Month.ts:63](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format/Month.ts#L63)*

**`inheritdoc`** 

**Parameters:**

Name | Type |
------ | ------ |
`time` | [Formattable](_formattable_.formattable.md) |
`format` | string |

**Returns:** *string*

___

### `Protected` formatNumber

▸ **formatNumber**(`number`: number, `leadingZero`: boolean): *string*

*Inherited from [Year](_format_year_.year.md).[formatNumber](_format_year_.year.md#protected-formatnumber)*

*Defined in [Format.ts:27](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format.ts#L27)*

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

### `Private` getMonthName

▸ **getMonthName**(`type`: string, `time`: [Formattable](_formattable_.formattable.md)): *string*

*Defined in [Format/Month.ts:177](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format/Month.ts#L177)*

Get a month name in a particular format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | long or short |
`time` | [Formattable](_formattable_.formattable.md) | Time to format from |

**Returns:** *string*

Formatted string including months

___

###  parse

▸ **parse**(`parsable`: string, `format`: string): *number*

*Overrides [Format](_format_.format.md).[parse](_format_.format.md#abstract-parse)*

*Defined in [Format/Month.ts:86](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format/Month.ts#L86)*

**`inheritdoc`** 

**Parameters:**

Name | Type |
------ | ------ |
`parsable` | string |
`format` | string |

**Returns:** *number*

___

### `Private` parseLongMonthNumberFromParsable

▸ **parseLongMonthNumberFromParsable**(`position`: number, `parsable`: string): *number*

*Defined in [Format/Month.ts:133](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format/Month.ts#L133)*

Parse a long month number from a parsable string

**Parameters:**

Name | Type |
------ | ------ |
`position` | number |
`parsable` | string |

**Returns:** *number*

Long month number

___

### `Private` parseMonthNameFromPosition

▸ **parseMonthNameFromPosition**(`position`: number, `parsable`: string): *string*

*Defined in [Format/Month.ts:159](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format/Month.ts#L159)*

Parse a month name starting at a position in the
parsable string.

**Parameters:**

Name | Type |
------ | ------ |
`position` | number |
`parsable` | string |

**Returns:** *string*

Long month name

___

### `Protected` parsePaddedAndUnpaddedUnits

▸ **parsePaddedAndUnpaddedUnits**(`parsable`: string, `format`: string, `token`: string): *number*

*Inherited from [Year](_format_year_.year.md).[parsePaddedAndUnpaddedUnits](_format_year_.year.md#protected-parsepaddedandunpaddedunits)*

*Defined in [Format.ts:43](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format.ts#L43)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parsable` | string | - |
`format` | string | - |
`token` | string |   |

**Returns:** *number*

___

### `Private` parseShortMonthNumberFromParsable

▸ **parseShortMonthNumberFromParsable**(`position`: number, `parsable`: string): *number*

*Defined in [Format/Month.ts:111](https://github.com/TerenceJefferies/STime/blob/2958401/src/Format/Month.ts#L111)*

Parse a short month number from a parsable string

**Parameters:**

Name | Type |
------ | ------ |
`position` | number |
`parsable` | string |

**Returns:** *number*

Short month number
