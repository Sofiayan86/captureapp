/**
 * PostCSS Configuration
 * 
 * This file configures PostCSS for the project, including autoprefixer
 * for browser compatibility.
 */

module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: 'autoplace',
      flexbox: 'no-2009'
    })
  ]
};
