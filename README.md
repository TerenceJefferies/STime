# Simple Time (STime)
Simple time package for Javascript

## Installation

`npm install stime`

## Usage

### Basic Usage

```javascript
const stime = require('stime');

const time = stime.now();

console.log(time.toTimestamp());
```

### Creating a new date from a native date

```javascript
const stime = require('stime');

const time = stime.fromDate(new Date());
```




