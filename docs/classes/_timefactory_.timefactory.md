[stime](../README.md) › [Globals](../globals.md) › ["TimeFactory"](../modules/_timefactory_.md) › [TimeFactory](_timefactory_.timefactory.md)

# Class: TimeFactory

A time factory used to create new instances of Time

## Hierarchy

* **TimeFactory**

## Index

### Methods

* [create](_timefactory_.timefactory.md#create)
* [fromDate](_timefactory_.timefactory.md#fromdate)

## Methods

###  create

▸ **create**(): *[Time](_time_.time.md)*

*Defined in [TimeFactory.ts:11](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/TimeFactory.ts#L11)*

Create a new time at the current date

**Returns:** *[Time](_time_.time.md)*

An instance of time

___

###  fromDate

▸ **fromDate**(`date`: Date): *[Time](_time_.time.md)*

*Defined in [TimeFactory.ts:20](https://github.com/TerenceJefferies/STime/blob/7ad9543/src/TimeFactory.ts#L20)*

Retrieve a new instance from a javascript date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | Date to create time from |

**Returns:** *[Time](_time_.time.md)*

An instance of time from the provided date
