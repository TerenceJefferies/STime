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
* [getMonth](_time_.time.md#getmonth)
* [getYear](_time_.time.md#getyear)
* [toTimestamp](_time_.time.md#totimestamp)

## Constructors

###  constructor

\+ **new Time**(`root`: Date): *[Time](_time_.time.md)*

*Defined in [Time.ts:2](https://github.com/TerenceJefferies/STime/blob/75a525a/src/Time.ts#L2)*

Create a new Time instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`root` | Date | Native date to base the time on  |

**Returns:** *[Time](_time_.time.md)*

## Properties

### `Readonly` root

• **root**: *Date*

*Defined in [Time.ts:2](https://github.com/TerenceJefferies/STime/blob/75a525a/src/Time.ts#L2)*

## Methods

###  getDay

▸ **getDay**(): *Number*

*Defined in [Time.ts:28](https://github.com/TerenceJefferies/STime/blob/75a525a/src/Time.ts#L28)*

Get the day of the month

**Returns:** *Number*

Day of the month

___

###  getMonth

▸ **getMonth**(): *Number*

*Defined in [Time.ts:36](https://github.com/TerenceJefferies/STime/blob/75a525a/src/Time.ts#L36)*

Get the month number

**Returns:** *Number*

Month number from 1 to 12

___

###  getYear

▸ **getYear**(): *Number*

*Defined in [Time.ts:44](https://github.com/TerenceJefferies/STime/blob/75a525a/src/Time.ts#L44)*

Get the year

**Returns:** *Number*

4-digit representation of the year

___

###  toTimestamp

▸ **toTimestamp**(): *Number*

*Defined in [Time.ts:20](https://github.com/TerenceJefferies/STime/blob/75a525a/src/Time.ts#L20)*

Get unix timestamp representation
*Example Usage:*
```
const unixTimestamp =time.toTimestamp();
```

**Returns:** *Number*

Unix timetamp
