/**
 * Date and Time Utilities
 * 
 * This module provides utility functions for handling dates and times
 * using the Moment.js library.
 */

// Import only the core of moment.js for smaller bundle size
import moment from 'moment';

// Only import moment-timezone when actually needed (lazy loading)
const loadMomentTimezone = async () => {
  if (!moment.tz) {
    await import('moment-timezone');
  }
  return moment;
};

/**
 * Format a date with the specified format string
 * 
 * @param {Date|string|number} date - The date to format
 * @param {string} format - Format string (default: 'MMMM D, YYYY')
 * @returns {string} Formatted date string
 */
export function formatDate(date, format = 'MMMM D, YYYY') {
  return moment(date).format(format);
}

/**
 * Get a relative time string (e.g., "5 minutes ago")
 * 
 * @param {Date|string|number} date - The date to format
 * @returns {string} Relative time string
 */
export function getRelativeTime(date) {
  return moment(date).fromNow();
}

/**
 * Convert a date to a specific timezone
 * 
 * @param {Date|string|number} date - The date to convert
 * @param {string} timezone - Target timezone (e.g., 'America/New_York')
 * @returns {Promise<string>} Formatted date in target timezone
 */
export async function convertToTimezone(date, timezone) {
  const momentTz = await loadMomentTimezone();
  return momentTz(date).tz(timezone).format('MMMM D, YYYY h:mm A z');
}

/**
 * Calculate duration between two dates
 * 
 * @param {Date|string|number} startDate - Start date
 * @param {Date|string|number} endDate - End date 
 * @returns {object} Duration object with days, hours, minutes properties
 */
export function calculateDuration(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);
  const duration = moment.duration(end.diff(start));
  
  return {
    days: Math.floor(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes()
  };
}
