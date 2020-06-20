[stime](../README.md) › [Globals](../globals.md) › ["TimeFromNowBuilder"](../modules/_timefromnowbuilder_.md) › [TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)

# Class: TimeFromNowBuilder

Builds a new time

**`example`** 
```javascript
const builder = new TimeFromNowBuilder(1);
const time = builder.days().from().now();
```

## Hierarchy

* **TimeFromNowBuilder**

## Index

### Constructors

* [constructor](_timefromnowbuilder_.timefromnowbuilder.md#constructor)

### Properties

* [FUTURE](_timefromnowbuilder_.timefromnowbuilder.md#readonly-future)
* [PAST](_timefromnowbuilder_.timefromnowbuilder.md#readonly-past)
* [direction](_timefromnowbuilder_.timefromnowbuilder.md#direction)
* [fromCurrent](_timefromnowbuilder_.timefromnowbuilder.md#fromcurrent)
* [origin](_timefromnowbuilder_.timefromnowbuilder.md#origin)
* [unit](_timefromnowbuilder_.timefromnowbuilder.md#unit)

### Methods

* [before](_timefromnowbuilder_.timefromnowbuilder.md#before)
* [days](_timefromnowbuilder_.timefromnowbuilder.md#days)
* [from](_timefromnowbuilder_.timefromnowbuilder.md#from)
* [get](_timefromnowbuilder_.timefromnowbuilder.md#get)
* [hours](_timefromnowbuilder_.timefromnowbuilder.md#hours)
* [minutes](_timefromnowbuilder_.timefromnowbuilder.md#minutes)
* [months](_timefromnowbuilder_.timefromnowbuilder.md#months)
* [now](_timefromnowbuilder_.timefromnowbuilder.md#now)
* [seconds](_timefromnowbuilder_.timefromnowbuilder.md#seconds)
* [time](_timefromnowbuilder_.timefromnowbuilder.md#time)
* [years](_timefromnowbuilder_.timefromnowbuilder.md#years)

## Constructors

###  constructor

\+ **new TimeFromNowBuilder**(`fromCurrent`: number): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:28

Create a new TimeFromNowBuilder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fromCurrent` | number | Number of units to separate from the current date  |

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

\+ **new TimeFromNowBuilder**(`fromCurrent`: number, `unit`: [Unit](../interfaces/_unit_.unit.md)): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:35

Create a new TimeFromNowBuilder

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fromCurrent` | number | Number of units to separate from the current date  |
`unit` | [Unit](../interfaces/_unit_.unit.md) | - |

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

\+ **new TimeFromNowBuilder**(`fromCurrent`: number, `unit`: [Unit](../interfaces/_unit_.unit.md), `direction`: number): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:36

Create a new TimeFromNowBuilder

**Parameters:**

Name | Type |
------ | ------ |
`fromCurrent` | number |
`unit` | [Unit](../interfaces/_unit_.unit.md) |
`direction` | number |

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

\+ **new TimeFromNowBuilder**(`fromCurrent`: number, `unit`: [Unit](../interfaces/_unit_.unit.md), `direction`: number, `origin`: [Time](_time_.time.md)): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:37

Create a new TimeFromNowBuilder

**Parameters:**

Name | Type |
------ | ------ |
`fromCurrent` | number |
`unit` | [Unit](../interfaces/_unit_.unit.md) |
`direction` | number |
`origin` | [Time](_time_.time.md) |

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

## Properties

### `Readonly` FUTURE

• **FUTURE**: *1* = 1

Defined in TimeFromNowBuilder.ts:19

___

### `Readonly` PAST

• **PAST**: *2* = 2

Defined in TimeFromNowBuilder.ts:20

___

###  direction

• **direction**: *number | null*

Defined in TimeFromNowBuilder.ts:26

___

###  fromCurrent

• **fromCurrent**: *number*

Defined in TimeFromNowBuilder.ts:22

___

###  origin

• **origin**: *[Time](_time_.time.md) | null*

Defined in TimeFromNowBuilder.ts:28

___

###  unit

• **unit**: *[Unit](../interfaces/_unit_.unit.md) | null*

Defined in TimeFromNowBuilder.ts:24

## Methods

###  before

▸ **before**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:110

Configured TimeFromNowBuilder in a past context

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  days

▸ **days**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:50

Configure number of days to offset by

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  from

▸ **from**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:98

Create a new TimeFromNowBuilder configured in a future context

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  get

▸ **get**(): *[Time](_time_.time.md)*

Defined in TimeFromNowBuilder.ts:156

Get the resultant time

**Returns:** *[Time](_time_.time.md)*

Created time

___

###  hours

▸ **hours**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:74

Configures the hour context

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  minutes

▸ **minutes**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:66

Configures the minute context

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  months

▸ **months**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:82

Configures the month context

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  now

▸ **now**(): *[Time](_time_.time.md)*

Defined in TimeFromNowBuilder.ts:122

Return configured time starting from now

**Returns:** *[Time](_time_.time.md)*

___

###  seconds

▸ **seconds**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:58

Configure number of seconds to offset by

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

___

###  time

▸ **time**(`time`: [Time](_time_.time.md)): *[Time](_time_.time.md)*

Defined in TimeFromNowBuilder.ts:139

Get the configured time from the specified time

**Parameters:**

Name | Type |
------ | ------ |
`time` | [Time](_time_.time.md) |

**Returns:** *[Time](_time_.time.md)*

___

###  years

▸ **years**(): *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*

Defined in TimeFromNowBuilder.ts:90

Configures the year context

**Returns:** *[TimeFromNowBuilder](_timefromnowbuilder_.timefromnowbuilder.md)*
