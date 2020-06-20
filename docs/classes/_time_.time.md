[stime](../README.md) › [Globals](../globals.md) › ["Time"](../modules/_time_.md) › [Time](_time_.time.md)

# Class: Time

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

*Defined in [Time.ts:2](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L2)*

Create a new Time instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`root` | Date | Native date to base the time on  |

**Returns:** *[Time](_time_.time.md)*

## Properties

### `Readonly` root

• **root**: *Date*

*Defined in [Time.ts:2](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L2)*

## Methods

###  getDay

▸ **getDay**(): *number*

*Defined in [Time.ts:26](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L26)*

Get the day of the month

**Returns:** *number*

Day of the month

___

###  getHours

▸ **getHours**(): *number*

*Defined in [Time.ts:66](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L66)*

Get hours

**Returns:** *number*

Hours

___

###  getMinutes

▸ **getMinutes**(): *number*

*Defined in [Time.ts:58](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L58)*

Get minutes

**Returns:** *number*

Minutes

___

###  getMonth

▸ **getMonth**(): *number*

*Defined in [Time.ts:34](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L34)*

Get the month number

**Returns:** *number*

Month number from 1 to 12

___

###  getSeconds

▸ **getSeconds**(): *number*

*Defined in [Time.ts:50](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L50)*

Get the seconds

**Returns:** *number*

Seconds

___

###  getYear

▸ **getYear**(): *number*

*Defined in [Time.ts:42](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L42)*

Get the year

**Returns:** *number*

4-digit representation of the year

___

###  toTimestamp

▸ **toTimestamp**(): *number*

*Defined in [Time.ts:18](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Time.ts#L18)*

Get unix timestamp representation

**`example`** 
const unixTimestamp = time.toTimestamp();

**Returns:** *number*

Unix timetamp
