[stime](../README.md) › [Globals](../globals.md) › ["STime"](../modules/_stime_.md) › [STime](_stime_.stime.md)

# Class: STime

STime facade used to access the Simple Time

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

*Defined in [STime.ts:12](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/STime.ts#L12)*

Create a new instance of STime

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeFactory` | [TimeFactory](_timefactory_.timefactory.md) | Factory to use to create time instances  |

**Returns:** *[STime](_stime_.stime.md)*

## Properties

### `Readonly` timeFactory

• **timeFactory**: *[TimeFactory](_timefactory_.timefactory.md)*

*Defined in [STime.ts:12](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/STime.ts#L12)*

Time factory to create new instances of time

## Methods

###  difference

▸ **difference**(`timeOne`: [Time](_time_.time.md), `timeTwo`: [Time](_time_.time.md)): *[Difference](_difference_difference_.difference.md)*

*Defined in [STime.ts:60](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/STime.ts#L60)*

Get the difference between two times

**`example`** 
```
const difference = stime.difference(timeOne, timeTwo);
const secondsBetweenTimes = difference.getTotalSeconds();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeOne` | [Time](_time_.time.md) | First time to compare |
`timeTwo` | [Time](_time_.time.md) | Time to compare to timeOne |

**Returns:** *[Difference](_difference_difference_.difference.md)*

between the two times

___

###  fromDate

▸ **fromDate**(`date`: Date): *[Time](_time_.time.md)*

*Defined in [STime.ts:45](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/STime.ts#L45)*

Create a new Time from a native Date

**`example`** 
```
const date = new Date();
const time = stime.fromDate(date);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | Date to create the time from |

**Returns:** *[Time](_time_.time.md)*

created from the date provided

___

###  now

▸ **now**(): *[Time](_time_.time.md)*

*Defined in [STime.ts:31](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/STime.ts#L31)*

Get the current time

**`example`** 
```
const currentTime = stime.now();
console.log(currentTime.getTimestamp());
```

**Returns:** *[Time](_time_.time.md)*

Current time
