[stime](../README.md) › [Globals](../globals.md) › ["STime"](../modules/_stime_.md) › [STime](_stime_.stime.md)

# Class: STime

## Hierarchy

* **STime**

## Index

### Constructors

* [constructor](_stime_.stime.md#constructor)

### Properties

* [timeFactory](_stime_.stime.md#readonly-timefactory)

### Methods

* [fromDate](_stime_.stime.md#fromdate)
* [now](_stime_.stime.md#now)

## Constructors

###  constructor

\+ **new STime**(`timeFactory`: [TimeFactory](_timefactory_.timefactory.md)): *[STime](_stime_.stime.md)*

*Defined in [STime.ts:5](https://github.com/TerenceJefferies/STime/blob/cda2b03/src/STime.ts#L5)*

A new STime

**Parameters:**

Name | Type |
------ | ------ |
`timeFactory` | [TimeFactory](_timefactory_.timefactory.md) |

**Returns:** *[STime](_stime_.stime.md)*

## Properties

### `Readonly` timeFactory

• **timeFactory**: *[TimeFactory](_timefactory_.timefactory.md)*

*Defined in [STime.ts:5](https://github.com/TerenceJefferies/STime/blob/cda2b03/src/STime.ts#L5)*

## Methods

###  fromDate

▸ **fromDate**(`date`: Date): *[Time](_time_.time.md)*

*Defined in [STime.ts:31](https://github.com/TerenceJefferies/STime/blob/cda2b03/src/STime.ts#L31)*

Create a new Time from a native Date

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *[Time](_time_.time.md)*

Time representing the date provided

___

###  now

▸ **now**(): *[Time](_time_.time.md)*

*Defined in [STime.ts:23](https://github.com/TerenceJefferies/STime/blob/cda2b03/src/STime.ts#L23)*

Get the current time
*Example Usage:*
```
const currentTime = stime.now();
console.log(currentTime.getTimestamp());
```

**Returns:** *[Time](_time_.time.md)*

Current time
