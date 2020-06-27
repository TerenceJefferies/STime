[stime](../README.md) › [Globals](../globals.md) › ["Format/Hour"](../modules/_format_hour_.md) › [Hour](_format_hour_.hour.md)

# Class: Hour

Hour format

## Hierarchy

* [Format](_format_.format.md)

  ↳ **Hour**

## Index

### Methods

* [format](_format_hour_.hour.md#format)
* [formatNumber](_format_hour_.hour.md#protected-formatnumber)
* [parse](_format_hour_.hour.md#parse)
* [parsePaddedAndUnpaddedUnits](_format_hour_.hour.md#protected-parsepaddedandunpaddedunits)

## Methods

###  format

▸ **format**(`time`: [Formattable](_formattable_.formattable.md), `format`: string): *string*

*Overrides [Format](_format_.format.md).[format](_format_.format.md#abstract-format)*

*Defined in [Format/Hour.ts:11](https://github.com/TerenceJefferies/STime/blob/b69ea6e/src/Format/Hour.ts#L11)*

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

###  parse

▸ **parse**(`parsable`: string, `format`: string): *number*

*Defined in [Format/Hour.ts:26](https://github.com/TerenceJefferies/STime/blob/b69ea6e/src/Format/Hour.ts#L26)*

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

*Defined in [Format.ts:43](https://github.com/TerenceJefferies/STime/blob/b69ea6e/src/Format.ts#L43)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parsable` | string | - |
`format` | string | - |
`token` | string |   |

**Returns:** *number*
