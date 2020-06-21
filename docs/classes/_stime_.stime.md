[stime](../README.md) › [Globals](../globals.md) › ["STime"](../modules/_stime_.md) › [STime](_stime_.stime.md)

# Class: STime

STime facade used to access the Simple Time

## Hierarchy

* [Generator](_generator_.generator.md)

  ↳ **STime**

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

*Overrides [Generator](_generator_.generator.md).[constructor](_generator_.generator.md#constructor)*

*Defined in [STime.ts:10](https://github.com/TerenceJefferies/STime/blob/78659c1/src/STime.ts#L10)*

Create a new instance of STime

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeFactory` | [TimeFactory](_timefactory_.timefactory.md) | Factory to use to create time instances  |

**Returns:** *[STime](_stime_.stime.md)*

## Properties

### `Readonly` timeFactory

• **timeFactory**: *[TimeFactory](_timefactory_.timefactory.md)*

*Inherited from [Generator](_generator_.generator.md).[timeFactory](_generator_.generator.md#readonly-timefactory)*

*Defined in [Generator.ts:8](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Generator.ts#L8)*

## Methods

###  create

▸ **create**(`units`: number): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [STime.ts:31](https://github.com/TerenceJefferies/STime/blob/78659c1/src/STime.ts#L31)*

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

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  difference

▸ **difference**(`timeOne`: [Time](_time_.time.md), `timeTwo`: [Time](_time_.time.md)): *[Difference](_difference_difference_.difference.md)*

*Defined in [STime.ts:46](https://github.com/TerenceJefferies/STime/blob/78659c1/src/STime.ts#L46)*

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

*Inherited from [Generator](_generator_.generator.md).[fromDate](_generator_.generator.md#fromdate)*

*Defined in [Generator.ts:57](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Generator.ts#L57)*

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

*Inherited from [Generator](_generator_.generator.md).[now](_generator_.generator.md#now)*

*Defined in [Generator.ts:27](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Generator.ts#L27)*

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

*Inherited from [Generator](_generator_.generator.md).[tomorrow](_generator_.generator.md#tomorrow)*

*Defined in [Generator.ts:43](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Generator.ts#L43)*

Create a time representing tomorrow

**Returns:** *[Time](_time_.time.md)*

Representation of tomorrow

___

###  yesterday

▸ **yesterday**(): *[Time](_time_.time.md)*

*Inherited from [Generator](_generator_.generator.md).[yesterday](_generator_.generator.md#yesterday)*

*Defined in [Generator.ts:35](https://github.com/TerenceJefferies/STime/blob/78659c1/src/Generator.ts#L35)*

Create a time representing yesterday at the current time

**Returns:** *[Time](_time_.time.md)*

Representation of yesterday
