[stime](../README.md) › [Globals](../globals.md) › ["Difference/DifferenceMonthAware"](../modules/_difference_differencemonthaware_.md) › [DifferenceMonthAware](_difference_differencemonthaware_.differencemonthaware.md)

# Class: DifferenceMonthAware

## Hierarchy

* [DifferenceYearAware](_difference_differenceyearaware_.differenceyearaware.md)

  ↳ **DifferenceMonthAware**

  ↳ [Difference](_difference_difference_.difference.md)

## Index

### Properties

* [timeOne](_difference_differencemonthaware_.differencemonthaware.md#abstract-timeone)
* [timeTwo](_difference_differencemonthaware_.differencemonthaware.md#abstract-timetwo)

### Methods

* [getTotalMonths](_difference_differencemonthaware_.differencemonthaware.md#gettotalmonths)
* [getTotalYears](_difference_differencemonthaware_.differencemonthaware.md#gettotalyears)

## Properties

### `Abstract` timeOne

• **timeOne**: *[Time](_time_.time.md)*

*Overrides [DifferenceYearAware](_difference_differenceyearaware_.differenceyearaware.md).[timeOne](_difference_differenceyearaware_.differenceyearaware.md#abstract-timeone)*

*Defined in [Difference/DifferenceMonthAware.ts:5](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/Difference/DifferenceMonthAware.ts#L5)*

___

### `Abstract` timeTwo

• **timeTwo**: *[Time](_time_.time.md)*

*Overrides [DifferenceYearAware](_difference_differenceyearaware_.differenceyearaware.md).[timeTwo](_difference_differenceyearaware_.differenceyearaware.md#abstract-timetwo)*

*Defined in [Difference/DifferenceMonthAware.ts:7](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/Difference/DifferenceMonthAware.ts#L7)*

## Methods

###  getTotalMonths

▸ **getTotalMonths**(): *number*

*Defined in [Difference/DifferenceMonthAware.ts:21](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/Difference/DifferenceMonthAware.ts#L21)*

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

###  getTotalYears

▸ **getTotalYears**(): *number*

*Inherited from [DifferenceYearAware](_difference_differenceyearaware_.differenceyearaware.md).[getTotalYears](_difference_differenceyearaware_.differenceyearaware.md#gettotalyears)*

*Defined in [Difference/DifferenceYearAware.ts:12](https://github.com/TerenceJefferies/STime/blob/8f5d348/src/Difference/DifferenceYearAware.ts#L12)*

Get total years between two times

**Returns:** *number*

Number of years between the two times
