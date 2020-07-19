[stime](../README.md) › [Globals](../globals.md) › ["Formattable"](../modules/_formattable_.md) › [Formattable](_formattable_.formattable.md)

# Class: Formattable

Makes a class formattable

## Hierarchy

* **Formattable**

  ↳ [Time](_time_.time.md)

## Index

### Methods

* [format](_formattable_.formattable.md#format)
* [getDay](_formattable_.formattable.md#abstract-getday)
* [getDayOfWeek](_formattable_.formattable.md#abstract-getdayofweek)
* [getHours](_formattable_.formattable.md#abstract-gethours)
* [getMinutes](_formattable_.formattable.md#abstract-getminutes)
* [getMonth](_formattable_.formattable.md#abstract-getmonth)
* [getSeconds](_formattable_.formattable.md#abstract-getseconds)
* [getYear](_formattable_.formattable.md#abstract-getyear)
* [toLocaleString](_formattable_.formattable.md#abstract-tolocalestring)

## Methods

###  format

▸ **format**(`format`: string): *string*

*Defined in [Formattable.ts:32](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L32)*

Format the date into a string

**`example`** 
```javascript
time.format(':leadingDay:/:leadingMonth:/:fullYear:'); // 01/01/2020
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

*Defined in [Formattable.ts:17](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L17)*

**Returns:** *number*

___

### `Abstract` getDayOfWeek

▸ **getDayOfWeek**(): *number*

*Defined in [Formattable.ts:21](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L21)*

**Returns:** *number*

___

### `Abstract` getHours

▸ **getHours**(): *number*

*Defined in [Formattable.ts:15](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L15)*

**Returns:** *number*

___

### `Abstract` getMinutes

▸ **getMinutes**(): *number*

*Defined in [Formattable.ts:14](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L14)*

**Returns:** *number*

___

### `Abstract` getMonth

▸ **getMonth**(): *number*

*Defined in [Formattable.ts:18](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L18)*

**Returns:** *number*

___

### `Abstract` getSeconds

▸ **getSeconds**(): *number*

*Defined in [Formattable.ts:16](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L16)*

**Returns:** *number*

___

### `Abstract` getYear

▸ **getYear**(): *number*

*Defined in [Formattable.ts:19](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L19)*

**Returns:** *number*

___

### `Abstract` toLocaleString

▸ **toLocaleString**(`locales`: string, `options`: any): *string*

*Defined in [Formattable.ts:20](https://github.com/TerenceJefferies/STime/blob/e560a22/src/Formattable.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`locales` | string |
`options` | any |

**Returns:** *string*
