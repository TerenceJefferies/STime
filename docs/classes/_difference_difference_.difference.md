[stime](../README.md) › [Globals](../globals.md) › ["Difference/Difference"](../modules/_difference_difference_.md) › [Difference](_difference_difference_.difference.md)

# Class: Difference

## Hierarchy

* **Difference**

## Index

### Constructors

* [constructor](_difference_difference_.difference.md#constructor)

### Properties

* [differenceInSeconds](_difference_difference_.difference.md#readonly-differenceinseconds)

### Methods

* [getTotalDays](_difference_difference_.difference.md#gettotaldays)
* [getTotalHours](_difference_difference_.difference.md#gettotalhours)
* [getTotalMinutes](_difference_difference_.difference.md#gettotalminutes)
* [getTotalSeconds](_difference_difference_.difference.md#gettotalseconds)

## Constructors

###  constructor

\+ **new Difference**(`differenceInSeconds`: number): *[Difference](_difference_difference_.difference.md)*

*Defined in [Difference/Difference.ts:2](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Difference/Difference.ts#L2)*

**Parameters:**

Name | Type |
------ | ------ |
`differenceInSeconds` | number |

**Returns:** *[Difference](_difference_difference_.difference.md)*

## Properties

### `Readonly` differenceInSeconds

• **differenceInSeconds**: *number*

*Defined in [Difference/Difference.ts:2](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Difference/Difference.ts#L2)*

## Methods

###  getTotalDays

▸ **getTotalDays**(): *number*

*Defined in [Difference/Difference.ts:38](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Difference/Difference.ts#L38)*

Get total days between to times

**Returns:** *number*

Total number of days between two times

___

###  getTotalHours

▸ **getTotalHours**(): *number*

*Defined in [Difference/Difference.ts:30](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Difference/Difference.ts#L30)*

Get total hours between two times

**Returns:** *number*

Total number of hours between two times

___

###  getTotalMinutes

▸ **getTotalMinutes**(): *number*

*Defined in [Difference/Difference.ts:22](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Difference/Difference.ts#L22)*

Get total minutes between dates

**Returns:** *number*

Total number of minutes between two times

___

###  getTotalSeconds

▸ **getTotalSeconds**(): *number*

*Defined in [Difference/Difference.ts:14](https://github.com/TerenceJefferies/STime/blob/00508aa/src/Difference/Difference.ts#L14)*

Get total number of seconds between two times

**`example`** 
difference.getTotalSeconds();

**Returns:** *number*

Total number of seconds between two dates
