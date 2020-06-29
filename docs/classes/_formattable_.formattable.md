[stime](../README.md) › [Globals](../globals.md) › ["Formattable"](../modules/_formattable_.md) › [Formattable](_formattable_.formattable.md)

# Class: Formattable

Makes a class formattable

## Hierarchy

* **Formattable**

  ↳ [Time](_time_.time.md)

## Index

### Properties

* [root](_formattable_.formattable.md#abstract-root)

### Methods

* [format](_formattable_.formattable.md#format)
* [getDay](_formattable_.formattable.md#abstract-getday)
* [getHours](_formattable_.formattable.md#abstract-gethours)
* [getMinutes](_formattable_.formattable.md#abstract-getminutes)
* [getMonth](_formattable_.formattable.md#abstract-getmonth)
* [getSeconds](_formattable_.formattable.md#abstract-getseconds)
* [getYear](_formattable_.formattable.md#abstract-getyear)

## Properties

### `Abstract` root

• **root**: *Date*

*Defined in [Formattable.ts:13](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L13)*

## Methods

###  format

▸ **format**(`format`: string): *string*

*Defined in [Formattable.ts:30](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L30)*

Format the date into a string

**`example`** 
```javascript
time.format('DD/MM/YYYY'); // 01-01-2020
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`format` | string | Format to turn the date into. |

**Returns:** *string*

Formatted date

___

### `Abstract` getDay

▸ **getDay**(): *number*

*Defined in [Formattable.ts:17](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L17)*

**Returns:** *number*

___

### `Abstract` getHours

▸ **getHours**(): *number*

*Defined in [Formattable.ts:15](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L15)*

**Returns:** *number*

___

### `Abstract` getMinutes

▸ **getMinutes**(): *number*

*Defined in [Formattable.ts:14](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L14)*

**Returns:** *number*

___

### `Abstract` getMonth

▸ **getMonth**(): *number*

*Defined in [Formattable.ts:18](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L18)*

**Returns:** *number*

___

### `Abstract` getSeconds

▸ **getSeconds**(): *number*

*Defined in [Formattable.ts:16](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L16)*

**Returns:** *number*

___

### `Abstract` getYear

▸ **getYear**(): *number*

*Defined in [Formattable.ts:19](https://github.com/TerenceJefferies/STime/blob/4756054/src/Formattable.ts#L19)*

**Returns:** *number*
