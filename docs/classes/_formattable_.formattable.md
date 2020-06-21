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
* [formatDays](_formattable_.formattable.md#formatdays)
* [formatHours](_formattable_.formattable.md#formathours)
* [formatMinutes](_formattable_.formattable.md#formatminutes)
* [formatMonths](_formattable_.formattable.md#formatmonths)
* [formatNumber](_formattable_.formattable.md#formatnumber)
* [formatSeconds](_formattable_.formattable.md#formatseconds)
* [formatYears](_formattable_.formattable.md#formatyears)
* [getDay](_formattable_.formattable.md#abstract-getday)
* [getHours](_formattable_.formattable.md#abstract-gethours)
* [getMinutes](_formattable_.formattable.md#abstract-getminutes)
* [getMonth](_formattable_.formattable.md#abstract-getmonth)
* [getMonthName](_formattable_.formattable.md#getmonthname)
* [getSeconds](_formattable_.formattable.md#abstract-getseconds)
* [getYear](_formattable_.formattable.md#abstract-getyear)

## Properties

### `Abstract` root

• **root**: *Date*

Defined in Formattable.ts:5

## Methods

###  format

▸ **format**(`format`: string): *string*

Defined in Formattable.ts:22

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

###  formatDays

▸ **formatDays**(`format`: string): *string*

Defined in Formattable.ts:70

Update a format to include days

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for days |

**Returns:** *string*

Formatted string including days

___

###  formatHours

▸ **formatHours**(`format`: string): *string*

Defined in Formattable.ts:59

Update a format to include hours

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for hours |

**Returns:** *string*

Formatted string including hours

___

###  formatMinutes

▸ **formatMinutes**(`format`: string): *string*

Defined in Formattable.ts:48

Update a format to include minutes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for minutes |

**Returns:** *string*

Formatted string including minutes

___

###  formatMonths

▸ **formatMonths**(`format`: string): *string*

Defined in Formattable.ts:81

Update a format to include months

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for months |

**Returns:** *string*

Formatted string including months

___

###  formatNumber

▸ **formatNumber**(`number`: number, `leadingZero`: boolean): *string*

Defined in Formattable.ts:118

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

###  formatSeconds

▸ **formatSeconds**(`format`: string): *string*

Defined in Formattable.ts:37

Update a format to include seconds

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to check for seconds |

**Returns:** *string*

Formatted string including seconds

___

###  formatYears

▸ **formatYears**(`format`: string): *string*

Defined in Formattable.ts:103

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

Defined in Formattable.ts:9

**Returns:** *number*

___

### `Abstract` getHours

▸ **getHours**(): *number*

Defined in Formattable.ts:7

**Returns:** *number*

___

### `Abstract` getMinutes

▸ **getMinutes**(): *number*

Defined in Formattable.ts:6

**Returns:** *number*

___

### `Abstract` getMonth

▸ **getMonth**(): *number*

Defined in Formattable.ts:10

**Returns:** *number*

___

###  getMonthName

▸ **getMonthName**(`type`: string): *string*

Defined in Formattable.ts:94

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

Defined in Formattable.ts:8

**Returns:** *number*

___

### `Abstract` getYear

▸ **getYear**(): *number*

Defined in Formattable.ts:11

**Returns:** *number*
