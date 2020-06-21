[stime](README.md) › [Globals](globals.md)

# stime

![Test](https://github.com/TerenceJefferies/STime/workflows/Test/badge.svg)

# Simple Time (STime)

STime is a simple javascript library used to generate and manipulate date/time. STime is designed to have a simple, readable API that is as pleasing to the eye as it is useful.

## Installation

`npm install stime`

## Basic Usage

### Using in a script

STime does not require any additional calls or instansiation to use, simply call the STime library after installation:

```javascript
const stime = require('stime');
```

### Getting the current date/time

The current time returned from any of the generator methods is a Time, more information about how to interact with a time can be found in the **Interacting with time** section.

```javascript
const stime = require('stime');
const time = stime.now();
```

### Creating an instance of time in the future or past

A builder is provided to create a date at a particular date/time from the current date/time, this can be accessed in the following way:

```javascript
const stime = require('stime');
stime.create(7).days().from().now(); // An instance of time 7 days from today
```

A number of options are available for use with the builder, depending which stage you are at:

| Stage | Available options | Example |  
| ----- | ------ | ------ |
| Creation | `days` `months` `years` `hours` `minutes` `seconds` |  `stime.create(7).hours()` |
| Units | `from` `before` | `stime.create(7).days().before()` |
| Direction | `now` `time` | `stime.create(6).hours().after().now()` |

### Getting the difference between two times

A [difference](docs/classes/_stime_.stime.md#difference) method is available in STime. This method takes two times and will report the difference between those two times.

**Example**

```javascript
const stime = require('stime');
const timeOne = stime.fromDate(new Date('01-01-2020 15:00:00'));
const timeTwo = stime.fromDate(new Date('01-05-2020 15:00:00'));
stime.difference(timeOne, timeTwo).getTotalDays(); // 4
```

### Creating a date from a native date

To allow for the greatest level of flexibility, STime offers a mechanism to get a time from a native javascript date.

```javascript
const stime = require('stime');
stime.fromDate(new Date('01-01-2020 14:00:00')); // A time at the specified date
```

### Interacting with time

| Method | Return value |
| ------ | ------------ |
| [getDay](docs/classes/_time_.time.md#getday) | The current day as an integer |
| [getHours](docs/classes/_time_.time.md#gethours) | The current hour as an integer |
| [getMinutes](docs/classes/_time_.time.md#getminutes) | The current minute as an integer |
| [getSeconds](docs/classes/_time_.time.md#getseconds) | The current second as an integer |
| [getYear](docs/classes/_time_.time.md#getyear) | The current year as an integer |
| [getMonth](docs/classes/_time_.time.md#getmonth) | The current month as an integer |
| [toTimestamp](docs/classes/_time_.time.md#toTimestamp) | Convert the time instance to a unix timestamp |
| [format](docs/classes/_time_.time.md#format) | Format a time into a particular format |

**Example**

```javascript
const stime = require('stime');
const time = stime.now();
time.getDay(); // Todays day of the month
```

### Formatting a time

**Available Formats**

| Character(s) | Result | Example |
| ------------ | ------ | ------- |
| `YYYY` | Four-digit year | `2020` |
| `YY` | Two-digit year | `20` |
| `MMMM` | Full month name | `January` |
| `MMM` | Three character month name | `Jan` |
| `MM` | Month number with leading zeros | `01` |
| `M` | Month number without leading zeros | `1` |
| `DD` | Day number with leading zeros | `03` |
| `D` | Day number without leading zeros | `3` |
| `HH` | Hour with leading zeros | `07` |
| `H` | Hour without leading zeros | `7` |
| `II` | Minutes with leading zeros | `08` |
| `I` | Minutes without leading zeros | `8` |
| `SS` | Seconds with leading zeros | `09` |
| `S` | Seconds without leading zeros | `9` |

**Example**

```javascript
const stime = require('stime');
stime.now().format('DD/MM/YYYY'); // 01/12/2020
```
