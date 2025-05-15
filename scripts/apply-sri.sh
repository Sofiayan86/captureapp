#!/bin/bash

# Apply SRI Hashes to External Scripts
#
# This script processes HTML files and adds SRI (Subresource Integrity) hashes
# to JavaScript and CSS resources.
#
# Usage: ./apply-sri.sh [path/to/html/file.html]

# Function to generate SRI hash for a file
generate_sri() {
  local file_path=$1
  local hash=$(openssl dgst -sha384 -binary "$file_path" | openssl base64 -A)
  echo "sha384-$hash"
}

# Function to update script tags in HTML
update_html_with_sri() {
  local html_file=$1
  local scripts=$(grep -o '<script src="[^"]*"' "$html_file" | sed 's/<script src="\([^"]*\)"/\1/')
  local styles=$(grep -o '<link [^>]*href="[^"]*"[^>]*rel="stylesheet"' "$html_file" | sed 's/.*href="\([^"]*\)".*/\1/')
  
  echo "Analyzing $html_file..."
  
  # Process JavaScript files
  for script in $scripts; do
    # Skip if already has integrity attribute
    if grep -q "<script src=\"$script\"[^>]*integrity=" "$html_file"; then
      echo "  Skipping $script (already has integrity attribute)"
      continue
    fi
    
    # Skip external scripts (for now)
    if [[ $script == http* ]]; then
      echo "  Skipping external script: $script"
      continue
    fi
    
    # Generate SRI hash
    local script_path=$(echo "$script" | sed 's/^\///')
    if [ -f "$script_path" ]; then
      local sri=$(generate_sri "$script_path")
      echo "  Adding SRI hash to $script: $sri"
      
      # Update HTML file
      sed -i "s|<script src=\"$script\"|<script src=\"$script\" integrity=\"$sri\" crossorigin=\"anonymous\"|g" "$html_file"
    else
      echo "  Warning: Could not find script file: $script_path"
    fi
  done
  
  # Process CSS files
  for style in $styles; do
    # Skip if already has integrity attribute
    if grep -q "<link [^>]*href=\"$style\"[^>]*integrity=" "$html_file"; then
      echo "  Skipping $style (already has integrity attribute)"
      continue
    fi
    
    # Skip external styles (for now)
    if [[ $style == http* ]]; then
      echo "  Skipping external style: $style"
      continue
    fi
    
    # Generate SRI hash
    local style_path=$(echo "$style" | sed 's/^\///')
    if [ -f "$style_path" ]; then
      local sri=$(generate_sri "$style_path")
      echo "  Adding SRI hash to $style: $sri"
      
      # Update HTML file
      sed -i "s|href=\"$style\"|href=\"$style\" integrity=\"$sri\" crossorigin=\"anonymous\"|g" "$html_file"
    else
      echo "  Warning: Could not find style file: $style_path"
    fi
  done
  
  echo "Completed processing $html_file"
}

# Main script execution
if [ -z "$1" ]; then
  echo "Processing all HTML files..."
  for html_file in $(find . -name "*.html"); do
    update_html_with_sri "$html_file"
  done
else
  if [ -f "$1" ]; then
    update_html_with_sri "$1"
  else
    echo "Error: File not found - $1"
    exit 1
  fi
fi

echo "SRI hash application complete!"
