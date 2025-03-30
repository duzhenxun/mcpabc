import moment from 'moment-timezone';

export const tools = {
  getCurrentTime: {
    description: 'Get current time in specified timezone',
    parameters: {
      type: 'object',
      properties: {
        timezone: {
          type: 'string',
          description: 'Timezone name (e.g. Asia/Shanghai)',
          default: 'UTC'
        },
        format: {
          type: 'string',
          description: 'Output format (moment.js format)',
          default: 'YYYY-MM-DD HH:mm:ss'
        }
      }
    },
    handler: async ({ timezone = 'UTC', format = 'YYYY-MM-DD HH:mm:ss' }) => {
      return moment().tz(timezone).format(format);
    }
  },

  calculateTimeDifference: {
    description: 'Calculate time difference between two dates',
    parameters: {
      type: 'object',
      properties: {
        date1: {
          type: 'string',
          description: 'First date (ISO 8601 format)'
        },
        date2: {
          type: 'string',
          description: 'Second date (ISO 8601 format)'
        },
        unit: {
          type: 'string',
          description: 'Unit of time difference (years, months, weeks, days, hours, minutes, seconds)',
          default: 'hours'
        }
      },
      required: ['date1', 'date2']
    },
    handler: async ({ date1, date2, unit = 'hours' }) => {
      const moment1 = moment(date1);
      const moment2 = moment(date2);
      return moment2.diff(moment1, unit);
    }
  },

  addTime: {
    description: 'Add time to a date',
    parameters: {
      type: 'object',
      properties: {
        date: {
          type: 'string',
          description: 'Base date (ISO 8601 format)'
        },
        amount: {
          type: 'number',
          description: 'Amount to add'
        },
        unit: {
          type: 'string',
          description: 'Unit of time to add (years, months, weeks, days, hours, minutes, seconds)',
          default: 'days'
        },
        format: {
          type: 'string',
          description: 'Output format (moment.js format)',
          default: 'YYYY-MM-DD HH:mm:ss'
        }
      },
      required: ['date', 'amount']
    },
    handler: async ({ date, amount, unit = 'days', format = 'YYYY-MM-DD HH:mm:ss' }) => {
      return moment(date).add(amount, unit).format(format);
    }
  }
};