[stime](../README.md) › [Globals](../globals.md) › ["Unit"](../modules/_unit_.md) › [Unit](_unit_.unit.md)

# Interface: Unit

## Hierarchy

* **Unit**

## Implemented by

* [Day](../classes/_unit_day_.day.md)
* [Hour](../classes/_unit_hour_.hour.md)
* [Minute](../classes/_unit_minute_.minute.md)
* [Month](../classes/_unit_month_.month.md)
* [Second](../classes/_unit_second_.second.md)
* [Year](../classes/_unit_year_.year.md)

## Index

### Methods

* [createIn](_unit_.unit.md#createin)

## Methods

###  createIn

▸ **createIn**(`time`: [Time](../classes/_time_.time.md), `units`: number): *[Time](../classes/_time_.time.md)*

*Defined in [Unit.ts:10](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Unit.ts#L10)*

Create a new time, separated from the current time by the offset

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | [Time](../classes/_time_.time.md) | Time to modify |
`units` | number | - |

**Returns:** *[Time](../classes/_time_.time.md)*

Resultant time
