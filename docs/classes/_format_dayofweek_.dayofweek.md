[stime](../README.md) › [Globals](../globals.md) › ["Format/DayOfWeek"](../modules/_format_dayofweek_.md) › [DayOfWeek](_format_dayofweek_.dayofweek.md)

# Class: DayOfWeek

Day of the week formatter

## Hierarchy

* [Format](_format_.format.md)

  ↳ **DayOfWeek**

## Index

### Properties

* [weekMap](_format_dayofweek_.dayofweek.md#private-readonly-weekmap)

### Methods

* [format](_format_dayofweek_.dayofweek.md#format)
* [formatNumber](_format_dayofweek_.dayofweek.md#protected-formatnumber)
* [getDayDataFromDayNumber](_format_dayofweek_.dayofweek.md#private-getdaydatafromdaynumber)
* [getFullDayName](_format_dayofweek_.dayofweek.md#private-getfulldayname)
* [getShortDayName](_format_dayofweek_.dayofweek.md#private-getshortdayname)
* [parse](_format_dayofweek_.dayofweek.md#parse)
* [parsePaddedAndUnpaddedUnits](_format_dayofweek_.dayofweek.md#protected-parsepaddedandunpaddedunits)

## Properties

### `Private` `Readonly` weekMap

• **weekMap**: *object[]* = [
    {
      dayOfWeek: 0,
      name: 'Sunday',
      shortName: 'Sun',
    },
    {
      dayOfWeek: 1,
      name: 'Monday',
      shortName: 'Mon',
    },
    {
      dayOfWeek: 2,
      name: 'Tuesday',
      shortName: 'Tue',
    },
    {
      dayOfWeek: 3,
      name: 'Wednesday',
      shortName: 'Wed',
    },
    {
      dayOfWeek: 4,
      name: 'Thursday',
      shortName: 'Thu',
    },
    {
      dayOfWeek: 5,
      name: 'Friday',
      shortName: 'Fri',
    },
    {
      dayOfWeek: 6,
      name: 'Saturday',
      shortName: 'Sat',
    },
  ]

*Defined in [Format/DayOfWeek.ts:9](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format/DayOfWeek.ts#L9)*

## Methods

###  format

▸ **format**(`time`: [Formattable](_formattable_.formattable.md), `format`: string): *string*

*Overrides [Format](_format_.format.md).[format](_format_.format.md#abstract-format)*

*Defined in [Format/DayOfWeek.ts:57](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format/DayOfWeek.ts#L57)*

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

### `Private` getDayDataFromDayNumber

▸ **getDayDataFromDayNumber**(`dayNumber`: number): *any*

*Defined in [Format/DayOfWeek.ts:94](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format/DayOfWeek.ts#L94)*

Get an entry from the week map for a particular day

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dayNumber` | number | 0-6 Sunday-Saturday |

**Returns:** *any*

___

### `Private` getFullDayName

▸ **getFullDayName**(`dayNumber`: number): *string*

*Defined in [Format/DayOfWeek.ts:84](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format/DayOfWeek.ts#L84)*

Get the full day name for a particlar day of the week

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dayNumber` | number | 0-6 - Sunday-Saturday |

**Returns:** *string*

___

### `Private` getShortDayName

▸ **getShortDayName**(`dayNumber`: number): *string*

*Defined in [Format/DayOfWeek.ts:74](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format/DayOfWeek.ts#L74)*

Get the short representation of a day of the week

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dayNumber` | number | 0-6 - Sunday-Saturday |

**Returns:** *string*

___

###  parse

▸ **parse**(`parsable`: string, `format`: string): *number*

*Overrides [Format](_format_.format.md).[parse](_format_.format.md#abstract-parse)*

*Defined in [Format/DayOfWeek.ts:50](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format/DayOfWeek.ts#L50)*

**`inheritdoc`** 

**Parameters:**

Name | Type |
------ | ------ |
`parsable` | string |
`format` | string |

**Returns:** *number*

___

### `Protected` parsePaddedAndUnpaddedUnits

▸ **parsePaddedAndUnpaddedUnits**(`parsable`: string, `format`: string, `token`: string): *number*

*Inherited from [Year](_format_year_.year.md).[parsePaddedAndUnpaddedUnits](_format_year_.year.md#protected-parsepaddedandunpaddedunits)*

*Defined in [Format.ts:43](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Format.ts#L43)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parsable` | string | - |
`format` | string | - |
`token` | string |   |

**Returns:** *number*
