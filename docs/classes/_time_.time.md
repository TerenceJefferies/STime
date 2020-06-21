[stime](../README.md) › [Globals](../globals.md) › ["Time"](../modules/_time_.md) › [Time](_time_.time.md)

# Class: Time

A representation of time

## Hierarchy

* **Time**

## Index

### Constructors

* [constructor](_time_.time.md#constructor)

### Properties

* [root](_time_.time.md#readonly-root)

### Methods

* [getDay](_time_.time.md#getday)
* [getHours](_time_.time.md#gethours)
* [getMinutes](_time_.time.md#getminutes)
* [getMonth](_time_.time.md#getmonth)
* [getSeconds](_time_.time.md#getseconds)
* [getYear](_time_.time.md#getyear)
* [toTimestamp](_time_.time.md#totimestamp)

## Constructors

###  constructor

\+ **new Time**(`root`: Date): *[Time](_time_.time.md)*

*Defined in [Time.ts:8](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L8)*

Create a new Time instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`root` | Date | Native date to base the time on  |

**Returns:** *[Time](_time_.time.md)*

## Properties

### `Readonly` root

• **root**: *Date*

*Defined in [Time.ts:8](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L8)*

**`var`** {Date} root Native date

## Methods

###  getDay

▸ **getDay**(): *number*

*Defined in [Time.ts:32](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L32)*

Get the day of the month

**Returns:** *number*

Day of the month

___

###  getHours

▸ **getHours**(): *number*

*Defined in [Time.ts:72](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L72)*

Get hours

**Returns:** *number*

Hours

___

###  getMinutes

▸ **getMinutes**(): *number*

*Defined in [Time.ts:64](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L64)*

Get minutes

**Returns:** *number*

Minutes

___

###  getMonth

▸ **getMonth**(): *number*

*Defined in [Time.ts:40](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L40)*

Get the month number

**Returns:** *number*

Month number from 1 to 12

___

###  getSeconds

▸ **getSeconds**(): *number*

*Defined in [Time.ts:56](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L56)*

Get the seconds

**Returns:** *number*

Seconds

___

###  getYear

▸ **getYear**(): *number*

*Defined in [Time.ts:48](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L48)*

Get the year

**Returns:** *number*

4-digit representation of the year

___

###  toTimestamp

▸ **toTimestamp**(): *number*

*Defined in [Time.ts:24](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Time.ts#L24)*

Get unix timestamp representation

**`example`** 
`const unixTimestamp = time.toTimestamp();`

**Returns:** *number*

Unix timetamp
