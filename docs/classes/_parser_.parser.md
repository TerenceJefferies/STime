[stime](../README.md) › [Globals](../globals.md) › ["Parser"](../modules/_parser_.md) › [Parser](_parser_.parser.md)

# Class: Parser

Parser to convert a string into a time

## Hierarchy

* **Parser**

## Index

### Constructors

* [constructor](_parser_.parser.md#constructor)

### Properties

* [format](_parser_.parser.md#format)
* [parsable](_parser_.parser.md#parsable)

### Methods

* [parse](_parser_.parser.md#parse)

## Constructors

###  constructor

\+ **new Parser**(`parsable`: string, `format`: string): *[Parser](_parser_.parser.md)*

*Defined in [Parser.ts:15](https://github.com/TerenceJefferies/STime/blob/4756054/src/Parser.ts#L15)*

Create a new parser

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parsable` | string | Parsable string to parse |
`format` | string | Format to parse with  |

**Returns:** *[Parser](_parser_.parser.md)*

## Properties

###  format

• **format**: *string*

*Defined in [Parser.ts:15](https://github.com/TerenceJefferies/STime/blob/4756054/src/Parser.ts#L15)*

___

###  parsable

• **parsable**: *string*

*Defined in [Parser.ts:13](https://github.com/TerenceJefferies/STime/blob/4756054/src/Parser.ts#L13)*

## Methods

###  parse

▸ **parse**(): *[Time](_time_.time.md)*

*Defined in [Parser.ts:31](https://github.com/TerenceJefferies/STime/blob/4756054/src/Parser.ts#L31)*

Parse into a time

**Returns:** *[Time](_time_.time.md)*
