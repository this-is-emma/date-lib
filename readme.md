# Date Library Documentation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![npm version](https://img.shields.io/npm/v/@eli-90/date-lab.svg)](https://www.npmjs.com/package/@eli-90/date-lab)

Visit the [date library](https://www.npmjs.com/package/@eli-90/date-lab) on npm

[![Bundle Size](https://img.shields.io/bundlephobia/min/@eli-90/date-lab.svg)](https://bundlephobia.com/result?p=@eli-90/date-lab)

[![GitHub issues](https://img.shields.io/github/issues/this-is-emma/date-lib.svg)](https://github.com/this-is-emma/date-lib/issues)


The `D` class is a utility for working with date instances and formatting.

## Constructor

### `constructor(...args)`

Creates a new `D` instance with a date.

- `...args` (optional): Arguments to create a new Date instance.

## Properties

### `year`

Returns the full 4-digit year of the date.

### `yr`

Returns the 2-digit year (without century) of the date.

### `month`

Returns the full name of the month.

### `mon`

Returns the abbreviated name of the month (first 3 letters).

### `day`

Returns the full name of the day of the week.

### `dy`

Returns the abbreviated name of the day of the week (first 3 letters).

### `date`

Returns the date of the month.

### `hours`

Returns the hours of the date.

### `mins`

Returns the minutes of the date.

### `secs`

Returns the seconds of the date.

## Methods

### `format(format)`

Formats the date instance according to the provided format string.

- `format` (string): The format string specifying how to format the date.

### `when()`

Calculates and returns a human-readable description of the time difference between the date instance and today's date.

## Example Usage

```javascript
const instance = new D(2023, 8, 30);
const formattedDate = instance.format('YYYY-MM-DD');
const timeDifference = instance.when();

console.log(formattedDate); // Outputs: 2023-09-30
console.log(timeDifference); // Outputs: "1 day from now"
