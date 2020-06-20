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

* [difference](_stime_.stime.md#difference)
* [fromDate](_stime_.stime.md#fromdate)
* [now](_stime_.stime.md#now)

## Constructors

###  constructor

\+ **new STime**(`timeFactory`: [TimeFactory](_timefactory_.timefactory.md)): *[STime](_stime_.stime.md)*

*Defined in [STime.ts:6](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/STime.ts#L6)*

Create a new instance of STime

**Parameters:**

Name | Type |
------ | ------ |
`timeFactory` | [TimeFactory](_timefactory_.timefactory.md) |

**Returns:** *[STime](_stime_.stime.md)*

## Properties

### `Readonly` timeFactory

• **timeFactory**: *[TimeFactory](_timefactory_.timefactory.md)*

*Defined in [STime.ts:6](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/STime.ts#L6)*

## Methods

###  difference

▸ **difference**(`timeOne`: [Time](_time_.time.md), `timeTwo`: [Time](_time_.time.md)): *[Difference](_difference_difference_.difference.md)*

*Defined in [STime.ts:50](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/STime.ts#L50)*

Get the difference between two times

**`example`** 
```
const difference = stime.difference(timeOne, timeTwo);
const secondsBetweenTimes = difference.getTotalSeconds();
```

**Parameters:**

Name | Type |
------ | ------ |
`timeOne` | [Time](_time_.time.md) |
`timeTwo` | [Time](_time_.time.md) |

**Returns:** *[Difference](_difference_difference_.difference.md)*

Difference between the two times

___

###  fromDate

▸ **fromDate**(`date`: Date): *[Time](_time_.time.md)*

*Defined in [STime.ts:37](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/STime.ts#L37)*

Create a new Time from a native Date

**`example`** 
```
const date = new Date();
const time = stime.fromDate(date);
```

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *[Time](_time_.time.md)*

Time created from the date provided

___

###  now

▸ **now**(): *[Time](_time_.time.md)*

*Defined in [STime.ts:24](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/STime.ts#L24)*

Get the current time

**`example`** 
```
const currentTime = stime.now();
console.log(currentTime.getTimestamp());
```

**Returns:** *[Time](_time_.time.md)*

Current time
