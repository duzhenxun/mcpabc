# mcpabc

MCP service for time-related queries and calculations

## Features

- Get current time in any timezone
- Calculate time difference between two dates
- Add time to a date

## Tools

### getCurrentTime

Get current time in specified timezone

```javascript
{
  timezone: 'Asia/Shanghai',  // optional, defaults to UTC
  format: 'YYYY-MM-DD HH:mm:ss'  // optional
}
```

### calculateTimeDifference

Calculate time difference between two dates

```javascript
{
  date1: '2025-03-30T14:30:00Z',
  date2: '2025-03-31T14:30:00Z',
  unit: 'hours'  // optional, defaults to hours
}
```

### addTime

Add time to a date

```javascript
{
  date: '2025-03-30T14:30:00Z',
  amount: 24,
  unit: 'hours',  // optional, defaults to days
  format: 'YYYY-MM-DD HH:mm:ss'  // optional
}
```

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```