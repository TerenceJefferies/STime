[stime](../README.md) › [Globals](../globals.md) › ["Time"](../modules/_time_.md) › [Time](_time_.time.md)

# Class: Time

A representation of time

## Hierarchy

* [Formattable](_formattable_.formattable.md)

  ↳ **Time**

## Index

### Constructors

* [constructor](_time_.time.md#constructor)

### Properties

* [root](_time_.time.md#readonly-root)

### Methods

* [format](_time_.time.md#format)
* [formatDays](_time_.time.md#formatdays)
* [formatHours](_time_.time.md#formathours)
* [formatMinutes](_time_.time.md#formatminutes)
* [formatMonths](_time_.time.md#formatmonths)
* [formatNumber](_time_.time.md#formatnumber)
* [formatSeconds](_time_.time.md#formatseconds)
* [formatYears](_time_.time.md#formatyears)
* [getDay](_time_.time.md#getday)
* [getHours](_time_.time.md#gethours)
* [getMinutes](_time_.time.md#getminutes)
* [getMonth](_time_.time.md#getmonth)
* [getMonthName](_time_.time.md#getmonthname)
* [getSeconds](_time_.time.md#getseconds)
* [getYear](_time_.time.md#getyear)
* [toTimestamp](_time_.time.md#totimestamp)

## Constructors

###  constructor

\+ **new Time**(`root`: Date): *[Time](_time_.time.md)*

*Defined in [Time.ts:10](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L10)*

Create a new Time instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`root` | Date | Native date to base the time on  |

**Returns:** *[Time](_time_.time.md)*

## Properties

### `Readonly` root

• **root**: *Date*

*Overrides [Formattable](_formattable_.formattable.md).[root](_formattable_.formattable.md#abstract-root)*

*Defined in [Time.ts:10](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L10)*

**`var`** {Date} root Native date

## Methods

###  format

▸ **format**(`format`: string): *string*

*Inherited from [Formattable](_formattable_.formattable.md).[format](_formattable_.formattable.md#format)*

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

*Inherited from [Formattable](_formattable_.formattable.md).[formatDays](_formattable_.formattable.md#formatdays)*

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

*Inherited from [Formattable](_formattable_.formattable.md).[formatHours](_formattable_.formattable.md#formathours)*

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

*Inherited from [Formattable](_formattable_.formattable.md).[formatMinutes](_formattable_.formattable.md#formatminutes)*

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

*Inherited from [Formattable](_formattable_.formattable.md).[formatMonths](_formattable_.formattable.md#formatmonths)*

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

*Inherited from [Formattable](_formattable_.formattable.md).[formatNumber](_formattable_.formattable.md#formatnumber)*

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

*Inherited from [Formattable](_formattable_.formattable.md).[formatSeconds](_formattable_.formattable.md#formatseconds)*

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

*Inherited from [Formattable](_formattable_.formattable.md).[formatYears](_formattable_.formattable.md#formatyears)*

Defined in Formattable.ts:103

Update a format to include years

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to update |

**Returns:** *string*

Formatted string including years

___

###  getDay

▸ **getDay**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getDay](_formattable_.formattable.md#abstract-getday)*

*Defined in [Time.ts:35](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L35)*

Get the day of the month

**Returns:** *number*

Day of the month

___

###  getHours

▸ **getHours**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getHours](_formattable_.formattable.md#abstract-gethours)*

*Defined in [Time.ts:75](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L75)*

Get hours

**Returns:** *number*

Hours

___

###  getMinutes

▸ **getMinutes**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getMinutes](_formattable_.formattable.md#abstract-getminutes)*

*Defined in [Time.ts:67](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L67)*

Get minutes

**Returns:** *number*

Minutes

___

###  getMonth

▸ **getMonth**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getMonth](_formattable_.formattable.md#abstract-getmonth)*

*Defined in [Time.ts:43](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L43)*

Get the month number

**Returns:** *number*

Month number from 1 to 12

___

###  getMonthName

▸ **getMonthName**(`type`: string): *string*

*Inherited from [Formattable](_formattable_.formattable.md).[getMonthName](_formattable_.formattable.md#getmonthname)*

Defined in Formattable.ts:94

Get a month name in a particular format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | long or short |

**Returns:** *string*

Formatted string including months

___

###  getSeconds

▸ **getSeconds**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getSeconds](_formattable_.formattable.md#abstract-getseconds)*

*Defined in [Time.ts:59](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L59)*

Get the seconds

**Returns:** *number*

Seconds

___

###  getYear

▸ **getYear**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getYear](_formattable_.formattable.md#abstract-getyear)*

*Defined in [Time.ts:51](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L51)*

Get the year

**Returns:** *number*

4-digit representation of the year

___

###  toTimestamp

▸ **toTimestamp**(): *number*

*Defined in [Time.ts:27](https://github.com/TerenceJefferies/STime/blob/bfe15dd/src/Time.ts#L27)*

Get unix timestamp representation

**`example`** 
`const unixTimestamp = time.toTimestamp();`

**Returns:** *number*

Unix timetamp
