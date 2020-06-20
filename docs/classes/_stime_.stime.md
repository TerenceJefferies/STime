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

* [create](_stime_.stime.md#create)
* [difference](_stime_.stime.md#difference)
* [fromDate](_stime_.stime.md#fromdate)
* [now](_stime_.stime.md#now)
* [tomorrow](_stime_.stime.md#tomorrow)
* [yesterday](_stime_.stime.md#yesterday)

## Constructors

###  constructor

\+ **new STime**(`timeFactory`: [TimeFactory](_timefactory_.timefactory.md)): *[STime](_stime_.stime.md)*

*Defined in [STime.ts:13](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L13)*

Create a new instance of STime

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeFactory` | [TimeFactory](_timefactory_.timefactory.md) | Factory to use to create time instances  |

**Returns:** *[STime](_stime_.stime.md)*

## Properties

### `Readonly` timeFactory

• **timeFactory**: *[TimeFactory](_timefactory_.timefactory.md)*

*Defined in [STime.ts:13](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L13)*

Time factory to create new instances of time

## Methods

###  create

▸ **create**(`units`: number): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

*Defined in [STime.ts:64](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L64)*

Create a date before or after the current date

**`example`** 
```javascript
// Create a time 7 days from now
stime.create(7).days().from().now();
// Create a time 14 days before now
stime.create(14).days().before().now();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`units` | number | Number of units to add or sutract to/from the current date |

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  difference

▸ **difference**(`timeOne`: [Time](_time_.time.md), `timeTwo`: [Time](_time_.time.md)): *[Difference](_difference_difference_.difference.md)*

*Defined in [STime.ts:93](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L93)*

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

*Defined in [STime.ts:78](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L78)*

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

*Defined in [STime.ts:32](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L32)*

Get the current time

**`example`** 
```
const currentTime = stime.now();
console.log(currentTime.getTimestamp());
```

**Returns:** *[Time](_time_.time.md)*

Current time

___

###  tomorrow

▸ **tomorrow**(): *[Time](_time_.time.md)*

*Defined in [STime.ts:48](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L48)*

Create a time representing tomorrow

**Returns:** *[Time](_time_.time.md)*

Representation of tomorrow

___

###  yesterday

▸ **yesterday**(): *[Time](_time_.time.md)*

*Defined in [STime.ts:40](https://github.com/TerenceJefferies/STime/blob/a1d2edf/src/STime.ts#L40)*

Create a time representing yesterday at the current time

**Returns:** *[Time](_time_.time.md)*

Representation of yesterday
