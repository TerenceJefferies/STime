[stime](../README.md) › [Globals](../globals.md) › ["Formattable"](../modules/_formattable_.md) › [Formattable](_formattable_.formattable.md)

# Class: Formattable

Makes a class formattable

## Hierarchy

* **Formattable**

  ↳ [Time](_time_.time.md)

## Index

### Properties

* [root](_formattable_.formattable.md#abstract-root)

### Methods

* [format](_formattable_.formattable.md#format)
* [formatDays](_formattable_.formattable.md#private-formatdays)
* [formatHours](_formattable_.formattable.md#private-formathours)
* [formatMinutes](_formattable_.formattable.md#private-formatminutes)
* [formatMonths](_formattable_.formattable.md#private-formatmonths)
* [formatNumber](_formattable_.formattable.md#private-formatnumber)
* [formatSeconds](_formattable_.formattable.md#private-formatseconds)
* [formatYears](_formattable_.formattable.md#private-formatyears)
* [getDay](_formattable_.formattable.md#abstract-getday)
* [getHours](_formattable_.formattable.md#abstract-gethours)
* [getMinutes](_formattable_.formattable.md#abstract-getminutes)
* [getMonth](_formattable_.formattable.md#abstract-getmonth)
* [getMonthName](_formattable_.formattable.md#private-getmonthname)
* [getSeconds](_formattable_.formattable.md#abstract-getseconds)
* [getYear](_formattable_.formattable.md#abstract-getyear)

## Properties

### `Abstract` root

• **root**: *Date*

*Defined in [Formattable.ts:5](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L5)*

## Methods

###  format

▸ **format**(`format`: string): *string*

*Defined in [Formattable.ts:22](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L22)*

Format the date into a string

**`example`** 
```javascript
time.format('DD/MM/YYYY'); // 01-01-2020
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to turn the date into. |

**Returns:** *string*

Formatted date

___

### `Private` formatDays

▸ **formatDays**(`format`: string): *string*

*Defined in [Formattable.ts:70](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L70)*

Update a format to include days

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for days |

**Returns:** *string*

Formatted string including days

___

### `Private` formatHours

▸ **formatHours**(`format`: string): *string*

*Defined in [Formattable.ts:59](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L59)*

Update a format to include hours

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for hours |

**Returns:** *string*

Formatted string including hours

___

### `Private` formatMinutes

▸ **formatMinutes**(`format`: string): *string*

*Defined in [Formattable.ts:48](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L48)*

Update a format to include minutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for minutes |

**Returns:** *string*

Formatted string including minutes

___

### `Private` formatMonths

▸ **formatMonths**(`format`: string): *string*

*Defined in [Formattable.ts:81](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L81)*

Update a format to include months

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for months |

**Returns:** *string*

Formatted string including months

___

### `Private` formatNumber

▸ **formatNumber**(`number`: number, `leadingZero`: boolean): *string*

*Defined in [Formattable.ts:118](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L118)*

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

### `Private` formatSeconds

▸ **formatSeconds**(`format`: string): *string*

*Defined in [Formattable.ts:37](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L37)*

Update a format to include seconds

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for seconds |

**Returns:** *string*

Formatted string including seconds

___

### `Private` formatYears

▸ **formatYears**(`format`: string): *string*

*Defined in [Formattable.ts:103](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L103)*

Update a format to include years

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to update |

**Returns:** *string*

Formatted string including years

___

### `Abstract` getDay

▸ **getDay**(): *number*

*Defined in [Formattable.ts:9](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L9)*

**Returns:** *number*

___

### `Abstract` getHours

▸ **getHours**(): *number*

*Defined in [Formattable.ts:7](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L7)*

**Returns:** *number*

___

### `Abstract` getMinutes

▸ **getMinutes**(): *number*

*Defined in [Formattable.ts:6](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L6)*

**Returns:** *number*

___

### `Abstract` getMonth

▸ **getMonth**(): *number*

*Defined in [Formattable.ts:10](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L10)*

**Returns:** *number*

___

### `Private` getMonthName

▸ **getMonthName**(`type`: string): *string*

*Defined in [Formattable.ts:94](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L94)*

Get a month name in a particular format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | long or short |

**Returns:** *string*

Formatted string including months

___

### `Abstract` getSeconds

▸ **getSeconds**(): *number*

*Defined in [Formattable.ts:8](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L8)*

**Returns:** *number*

___

### `Abstract` getYear

▸ **getYear**(): *number*

*Defined in [Formattable.ts:11](https://github.com/TerenceJefferies/STime/blob/f4ba2f2/src/Formattable.ts#L11)*

**Returns:** *number*
