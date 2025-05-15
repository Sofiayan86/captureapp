/**
 * Bundle Analyzer Script
 * 
 * This script analyzes webpack bundles and generates visualizations and reports
 * to help optimize bundle size and loading performance.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

// Create reports directory if it doesn't exist
const reportsDir = path.join(__dirname, '..', 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

console.log(chalk.blue('Starting bundle analysis...'));

try {
  // Run webpack with the ANALYZE flag
  console.log(chalk.yellow('Building production bundle with analyzer...'));
  execSync('npm run analyze', { stdio: 'inherit' });
  
  console.log(chalk.green('✓ Bundle analysis complete!'));
  console.log(chalk.blue('Analysis report generated at:'));
  console.log(chalk.cyan('  reports/bundle-analysis.html'));
  
  // Additional analysis could be added here
  
} catch (error) {
  console.error(chalk.red('Bundle analysis failed:'), error.message);
  process.exit(1);
}
