[stime](../README.md) › [Globals](../globals.md) › ["TimeFactory"](../modules/_timefactory_.md) › [TimeFactory](_timefactory_.timefactory.md)

# Class: TimeFactory

A time factory used to create new instances of Time

## Hierarchy

* **TimeFactory**

## Index

### Methods

* [create](_timefactory_.timefactory.md#create)
* [createForTomorrow](_timefactory_.timefactory.md#createfortomorrow)
* [createForYesterday](_timefactory_.timefactory.md#createforyesterday)
* [fromDate](_timefactory_.timefactory.md#fromdate)

## Methods

###  create

▸ **create**(): *[Time](_time_.time.md)*

*Defined in [TimeFactory.ts:11](https://github.com/TerenceJefferies/STime/blob/6bae059/src/TimeFactory.ts#L11)*

Create a new time at the current date

**Returns:** *[Time](_time_.time.md)*

An instance of time

___

###  createForTomorrow

▸ **createForTomorrow**(): *[Time](_time_.time.md)*

*Defined in [TimeFactory.ts:29](https://github.com/TerenceJefferies/STime/blob/6bae059/src/TimeFactory.ts#L29)*

Create a time representing tomorrow

**Returns:** *[Time](_time_.time.md)*

Time represeting tomorrow

___

###  createForYesterday

▸ **createForYesterday**(): *[Time](_time_.time.md)*

*Defined in [TimeFactory.ts:19](https://github.com/TerenceJefferies/STime/blob/6bae059/src/TimeFactory.ts#L19)*

Create a time representing yesterday at the current time

**Returns:** *[Time](_time_.time.md)*

Time representing yesterday

___

###  fromDate

▸ **fromDate**(`date`: Date): *[Time](_time_.time.md)*

*Defined in [TimeFactory.ts:40](https://github.com/TerenceJefferies/STime/blob/6bae059/src/TimeFactory.ts#L40)*

Retrieve a new instance from a javascript date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | Date to create time from |

**Returns:** *[Time](_time_.time.md)*

An instance of time from the provided date
