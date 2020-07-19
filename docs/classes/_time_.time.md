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

* [root](_time_.time.md#private-readonly-root)

### Methods

* [format](_time_.time.md#format)
* [getDay](_time_.time.md#getday)
* [getDayOfWeek](_time_.time.md#getdayofweek)
* [getHours](_time_.time.md#gethours)
* [getMinutes](_time_.time.md#getminutes)
* [getMonth](_time_.time.md#getmonth)
* [getSeconds](_time_.time.md#getseconds)
* [getYear](_time_.time.md#getyear)
* [toLocaleString](_time_.time.md#tolocalestring)
* [toTimestamp](_time_.time.md#totimestamp)

## Constructors

###  constructor

\+ **new Time**(`root`: Date): *[Time](_time_.time.md)*

*Defined in [Time.ts:10](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L10)*

Create a new Time instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`root` | Date | Native date to base the time on  |

**Returns:** *[Time](_time_.time.md)*

## Properties

### `Private` `Readonly` root

• **root**: *Date*

*Defined in [Time.ts:10](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L10)*

**`var`** {Date} root Native date

## Methods

###  format

▸ **format**(`format`: string): *string*

*Inherited from [Formattable](_formattable_.formattable.md).[format](_formattable_.formattable.md#format)*

*Defined in [Formattable.ts:32](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L32)*

Format the date into a string

**`example`** 
```javascript
time.format(':leadingDay:/:leadingMonth:/:fullYear:'); // 01/01/2020
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to turn the date into. |

**Returns:** *string*

Formatted date

___

###  getDay

▸ **getDay**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getDay](_formattable_.formattable.md#abstract-getday)*

*Defined in [Time.ts:35](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L35)*

Get the day of the month

**Returns:** *number*

Day of the month

___

###  getDayOfWeek

▸ **getDayOfWeek**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getDayOfWeek](_formattable_.formattable.md#abstract-getdayofweek)*

*Defined in [Time.ts:83](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L83)*

Get day of week

**Returns:** *number*

0-6 / Sunday-Saturday

___

###  getHours

▸ **getHours**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getHours](_formattable_.formattable.md#abstract-gethours)*

*Defined in [Time.ts:75](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L75)*

Get hours

**Returns:** *number*

Hours

___

###  getMinutes

▸ **getMinutes**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getMinutes](_formattable_.formattable.md#abstract-getminutes)*

*Defined in [Time.ts:67](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L67)*

Get minutes

**Returns:** *number*

Minutes

___

###  getMonth

▸ **getMonth**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getMonth](_formattable_.formattable.md#abstract-getmonth)*

*Defined in [Time.ts:43](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L43)*

Get the month number

**Returns:** *number*

Month number from 1 to 12

___

###  getSeconds

▸ **getSeconds**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getSeconds](_formattable_.formattable.md#abstract-getseconds)*

*Defined in [Time.ts:59](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L59)*

Get the seconds

**Returns:** *number*

Seconds

___

###  getYear

▸ **getYear**(): *number*

*Overrides [Formattable](_formattable_.formattable.md).[getYear](_formattable_.formattable.md#abstract-getyear)*

*Defined in [Time.ts:51](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L51)*

Get the year

**Returns:** *number*

4-digit representation of the year

___

###  toLocaleString

▸ **toLocaleString**(`locales`: string, `options`: any): *string*

*Overrides [Formattable](_formattable_.formattable.md).[toLocaleString](_formattable_.formattable.md#abstract-tolocalestring)*

*Defined in [Time.ts:92](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L92)*

Get the time as a locale string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`locales` | string | Locales to get the string for |
`options` | any |   |

**Returns:** *string*

___

###  toTimestamp

▸ **toTimestamp**(): *number*

*Defined in [Time.ts:27](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Time.ts#L27)*

Get unix timestamp representation

**`example`** 
`const unixTimestamp = time.toTimestamp();`

**Returns:** *number*

Unix timetamp
