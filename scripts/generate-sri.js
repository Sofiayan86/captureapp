#!/usr/bin/env node

/**
 * SRI Hash Generator
 * 
 * This script generates Subresource Integrity (SRI) hashes for JavaScript and CSS files.
 * It helps improve security by ensuring the resources being loaded haven't been tampered with.
 * 
 * Usage:
 *   node generate-sri.js <path-to-file>
 * 
 * Example:
 *   node generate-sri.js ../js/capture-eye.bundled.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Get file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path as an argument.');
  process.exit(1);
}

// Read the file
try {
  const fileContent = fs.readFileSync(path.resolve(filePath));
  
  // Generate SRI hash (sha384 is commonly used for SRI)
  const hash = crypto
    .createHash('sha384')
    .update(fileContent)
    .digest('base64');
  
  console.log(`\nSRI Hash for ${path.basename(filePath)}:`);
  console.log(`integrity="sha384-${hash}"\n`);
  
  // Provide example usage
  const extension = path.extname(filePath).toLowerCase();
  if (extension === '.js') {
    console.log(`Example usage in HTML:`);
    console.log(`<script src="${path.basename(filePath)}" integrity="sha384-${hash}" crossorigin="anonymous"></script>\n`);
  } else if (extension === '.css') {
    console.log(`Example usage in HTML:`);
    console.log(`<link href="${path.basename(filePath)}" rel="stylesheet" integrity="sha384-${hash}" crossorigin="anonymous">\n`);
  }
  
} catch (error) {
  console.error(`Error processing file: ${error.message}`);
  process.exit(1);
}
