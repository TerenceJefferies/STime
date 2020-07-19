[stime](../README.md) › [Globals](../globals.md) › ["TimeFromBuilder"](../modules/_timefrombuilder_.md) › [TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)

# Class: TimeFromBuilder

Builds a new time

**`example`** 
```javascript
const builder = new TimeFromBuilder(1);
const time = builder.days().from().now();
```

## Hierarchy

* **TimeFromBuilder**

## Index

### Constructors

* [constructor](_timefrombuilder_.timefrombuilder.md#constructor)

### Properties

* [FUTURE](_timefrombuilder_.timefrombuilder.md#readonly-future)
* [PAST](_timefrombuilder_.timefrombuilder.md#readonly-past)
* [direction](_timefrombuilder_.timefrombuilder.md#direction)
* [fromCurrent](_timefrombuilder_.timefrombuilder.md#fromcurrent)
* [origin](_timefrombuilder_.timefrombuilder.md#origin)
* [unit](_timefrombuilder_.timefrombuilder.md#unit)

### Methods

* [before](_timefrombuilder_.timefrombuilder.md#before)
* [days](_timefrombuilder_.timefrombuilder.md#days)
* [from](_timefrombuilder_.timefrombuilder.md#from)
* [get](_timefrombuilder_.timefrombuilder.md#get)
* [hours](_timefrombuilder_.timefrombuilder.md#hours)
* [minutes](_timefrombuilder_.timefrombuilder.md#minutes)
* [months](_timefrombuilder_.timefrombuilder.md#months)
* [now](_timefrombuilder_.timefrombuilder.md#now)
* [seconds](_timefrombuilder_.timefrombuilder.md#seconds)
* [time](_timefrombuilder_.timefrombuilder.md#time)
* [years](_timefrombuilder_.timefrombuilder.md#years)

## Constructors

###  constructor

\+ **new TimeFromBuilder**(`fromCurrent`: number): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:28](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L28)*

Create a new TimeFromBuilder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fromCurrent` | number | Number of units to separate from the current date  |

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

\+ **new TimeFromBuilder**(`fromCurrent`: number, `unit`: [Unit](../interfaces/_unit_.unit.md)): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:35](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L35)*

Create a new TimeFromBuilder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fromCurrent` | number | Number of units to separate from the current date  |
`unit` | [Unit](../interfaces/_unit_.unit.md) | - |

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

\+ **new TimeFromBuilder**(`fromCurrent`: number, `unit`: [Unit](../interfaces/_unit_.unit.md), `direction`: number): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:36](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L36)*

Create a new TimeFromBuilder

**Parameters:**

Name | Type |
------ | ------ |
`fromCurrent` | number |
`unit` | [Unit](../interfaces/_unit_.unit.md) |
`direction` | number |

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

\+ **new TimeFromBuilder**(`fromCurrent`: number, `unit`: [Unit](../interfaces/_unit_.unit.md), `direction`: number, `origin`: [Time](_time_.time.md)): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:37](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L37)*

Create a new TimeFromBuilder

**Parameters:**

Name | Type |
------ | ------ |
`fromCurrent` | number |
`unit` | [Unit](../interfaces/_unit_.unit.md) |
`direction` | number |
`origin` | [Time](_time_.time.md) |

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

## Properties

### `Readonly` FUTURE

• **FUTURE**: *1* = 1

*Defined in [TimeFromBuilder.ts:19](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L19)*

___

### `Readonly` PAST

• **PAST**: *2* = 2

*Defined in [TimeFromBuilder.ts:20](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L20)*

___

###  direction

• **direction**: *number | null*

*Defined in [TimeFromBuilder.ts:26](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L26)*

___

###  fromCurrent

• **fromCurrent**: *number*

*Defined in [TimeFromBuilder.ts:22](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L22)*

___

###  origin

• **origin**: *[Time](_time_.time.md) | null*

*Defined in [TimeFromBuilder.ts:28](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L28)*

___

###  unit

• **unit**: *[Unit](../interfaces/_unit_.unit.md) | null*

*Defined in [TimeFromBuilder.ts:24](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L24)*

## Methods

###  before

▸ **before**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:110](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L110)*

Configured TimeFromBuilder in a past context

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  days

▸ **days**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:50](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L50)*

Configure number of days to offset by

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  from

▸ **from**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:98](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L98)*

Create a new TimeFromBuilder configured in a future context

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  get

▸ **get**(): *[Time](_time_.time.md)*

*Defined in [TimeFromBuilder.ts:156](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L156)*

Get the resultant time

**Returns:** *[Time](_time_.time.md)*

Created time

___

###  hours

▸ **hours**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:74](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L74)*

Configures the hour context

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  minutes

▸ **minutes**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:66](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L66)*

Configures the minute context

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  months

▸ **months**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:82](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L82)*

Configures the month context

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  now

▸ **now**(): *[Time](_time_.time.md)*

*Defined in [TimeFromBuilder.ts:122](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L122)*

Return configured time starting from now

**Returns:** *[Time](_time_.time.md)*

___

###  seconds

▸ **seconds**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:58](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L58)*

Configure number of seconds to offset by

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

___

###  time

▸ **time**(`time`: [Time](_time_.time.md)): *[Time](_time_.time.md)*

*Defined in [TimeFromBuilder.ts:139](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L139)*

Get the configured time from the specified time

**Parameters:**

Name | Type |
------ | ------ |
`time` | [Time](_time_.time.md) |

**Returns:** *[Time](_time_.time.md)*

___

###  years

▸ **years**(): *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*

*Defined in [TimeFromBuilder.ts:90](https://github.com/TerenceJefferies/STime/blob/e560a22/src/TimeFromBuilder.ts#L90)*

Configures the year context

**Returns:** *[TimeFromBuilder](_timefrombuilder_.timefrombuilder.md)*
