[stime](../README.md) › [Globals](../globals.md) › ["Difference/Difference"](../modules/_difference_difference_.md) › [Difference](_difference_difference_.difference.md)

# Class: Difference

## Hierarchy

  ↳ [DifferenceMonthAware](_difference_differencemonthaware_.differencemonthaware.md)

  ↳ **Difference**

## Index

### Constructors

* [constructor](_difference_difference_.difference.md#constructor)

### Properties

* [differenceInSeconds](_difference_difference_.difference.md#readonly-differenceinseconds)
* [timeOne](_difference_difference_.difference.md#readonly-timeone)
* [timeTwo](_difference_difference_.difference.md#readonly-timetwo)

### Methods

* [getTotalDays](_difference_difference_.difference.md#gettotaldays)
* [getTotalHours](_difference_difference_.difference.md#gettotalhours)
* [getTotalMinutes](_difference_difference_.difference.md#gettotalminutes)
* [getTotalMonths](_difference_difference_.difference.md#gettotalmonths)
* [getTotalSeconds](_difference_difference_.difference.md#gettotalseconds)
* [getTotalWeeks](_difference_difference_.difference.md#gettotalweeks)
* [getTotalYears](_difference_difference_.difference.md#gettotalyears)

## Constructors

###  constructor

\+ **new Difference**(`timeOne`: [Time](_time_.time.md), `timeTwo`: [Time](_time_.time.md)): *[Difference](_difference_difference_.difference.md)*

*Defined in [Difference/Difference.ts:7](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeOne` | [Time](_time_.time.md) |
`timeTwo` | [Time](_time_.time.md) |

**Returns:** *[Difference](_difference_difference_.difference.md)*

## Properties

### `Readonly` differenceInSeconds

• **differenceInSeconds**: *number*

*Defined in [Difference/Difference.ts:5](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L5)*

___

### `Readonly` timeOne

• **timeOne**: *[Time](_time_.time.md)*

*Overrides [DifferenceMonthAware](_difference_differencemonthaware_.differencemonthaware.md).[timeOne](_difference_differencemonthaware_.differencemonthaware.md#abstract-timeone)*

*Defined in [Difference/Difference.ts:6](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L6)*

___

### `Readonly` timeTwo

• **timeTwo**: *[Time](_time_.time.md)*

*Overrides [DifferenceMonthAware](_difference_differencemonthaware_.differencemonthaware.md).[timeTwo](_difference_differencemonthaware_.differencemonthaware.md#abstract-timetwo)*

*Defined in [Difference/Difference.ts:7](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L7)*

## Methods

###  getTotalDays

▸ **getTotalDays**(): *number*

*Defined in [Difference/Difference.ts:46](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L46)*

Get total days between to times

**Returns:** *number*

Total number of days between two times

___

###  getTotalHours

▸ **getTotalHours**(): *number*

*Defined in [Difference/Difference.ts:38](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L38)*

Get total hours between two times

**Returns:** *number*

Total number of hours between two times

___

###  getTotalMinutes

▸ **getTotalMinutes**(): *number*

*Defined in [Difference/Difference.ts:30](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L30)*

Get total minutes between dates

**Returns:** *number*

Total number of minutes between two times

___

###  getTotalMonths

▸ **getTotalMonths**(): *number*

*Inherited from [DifferenceMonthAware](_difference_differencemonthaware_.differencemonthaware.md).[getTotalMonths](_difference_differencemonthaware_.differencemonthaware.md#gettotalmonths)*

*Defined in [Difference/DifferenceMonthAware.ts:21](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/DifferenceMonthAware.ts#L21)*

Get the number of months between the two times

**`example`** 
```javascript
const stime = require('stime');
const timeOne = stime.fromDate(new Date('01-01-2020 00:00:00'));
const timeTwo = stime.fromDate(new Date('06-01-2020 00:00:00'));
const diff = stime.difference(timeOne, timeTwo);
const months = diff.getTotalMonths(); // 5
```

**Returns:** *number*

Number of months between the two dates

___

###  getTotalSeconds

▸ **getTotalSeconds**(): *number*

*Defined in [Difference/Difference.ts:22](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L22)*

Get total number of seconds between two times

**`example`** 
`difference.getTotalSeconds();`

**Returns:** *number*

Total number of seconds between two dates

___

###  getTotalWeeks

▸ **getTotalWeeks**(): *number*

*Defined in [Difference/Difference.ts:54](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/Difference.ts#L54)*

Get total weeks between two times

**Returns:** *number*

Total number of weeks between two times

___

###  getTotalYears

▸ **getTotalYears**(): *number*

*Inherited from [DifferenceYearAware](_difference_differenceyearaware_.differenceyearaware.md).[getTotalYears](_difference_differenceyearaware_.differenceyearaware.md#gettotalyears)*

*Defined in [Difference/DifferenceYearAware.ts:12](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/Difference/DifferenceYearAware.ts#L12)*

Get total years between two times

**Returns:** *number*

Number of years between the two times
