[stime](../README.md) › [Globals](../globals.md) › ["Generator"](../modules/_generator_.md) › [Generator](_generator_.generator.md)

# Class: Generator

Generates new instances of time

## Hierarchy

* **Generator**

  ↳ [STime](_stime_.stime.md)

## Index

### Constructors

* [constructor](_generator_.generator.md#constructor)

### Properties

* [timeFactory](_generator_.generator.md#readonly-timefactory)

### Methods

* [fromDate](_generator_.generator.md#fromdate)
* [now](_generator_.generator.md#now)
* [tomorrow](_generator_.generator.md#tomorrow)
* [yesterday](_generator_.generator.md#yesterday)

## Constructors

###  constructor

\+ **new Generator**(`timeFactory`: [TimeFactory](_timefactory_.timefactory.md)): *[Generator](_generator_.generator.md)*

*Defined in [Generator.ts:8](https://github.com/TerenceJefferies/STime/blob/4756054/src/Generator.ts#L8)*

Create a new instance of time

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timeFactory` | [TimeFactory](_timefactory_.timefactory.md) |   |

**Returns:** *[Generator](_generator_.generator.md)*

## Properties

### `Readonly` timeFactory

• **timeFactory**: *[TimeFactory](_timefactory_.timefactory.md)*

*Defined in [Generator.ts:8](https://github.com/TerenceJefferies/STime/blob/4756054/src/Generator.ts#L8)*

## Methods

###  fromDate

▸ **fromDate**(`date`: Date): *[Time](_time_.time.md)*

*Defined in [Generator.ts:57](https://github.com/TerenceJefferies/STime/blob/4756054/src/Generator.ts#L57)*

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

*Defined in [Generator.ts:27](https://github.com/TerenceJefferies/STime/blob/4756054/src/Generator.ts#L27)*

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

*Defined in [Generator.ts:43](https://github.com/TerenceJefferies/STime/blob/4756054/src/Generator.ts#L43)*

Create a time representing tomorrow

**Returns:** *[Time](_time_.time.md)*

Representation of tomorrow

___

###  yesterday

▸ **yesterday**(): *[Time](_time_.time.md)*

*Defined in [Generator.ts:35](https://github.com/TerenceJefferies/STime/blob/4756054/src/Generator.ts#L35)*

Create a time representing yesterday at the current time

**Returns:** *[Time](_time_.time.md)*

Representation of yesterday
