/**
 * Google Analytics Integration
 * 
 * This module handles the initialization and configuration of Google Analytics
 * and provides utility functions for tracking events.
 */

// Initialize Google Analytics
export function initGoogleAnalytics() {
  // Check if analytics is already initialized
  if (window.dataLayer && window.gtag) {
    console.log('Google Analytics already initialized');
    return;
  }

  // Initialize dataLayer array if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  // Set initial timestamp
  gtag('js', new Date());
  
  // Configure analytics with measurement ID
  gtag('config', 'G-TKH8DCKN58');

  console.log('Google Analytics initialized');
}

// Track custom event
export function trackEvent(category, action, label, value) {
  if (window.gtag) {
    window.gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
  } else {
    console.error('Google Analytics not available for event tracking');
  }
}

// Initialize analytics when module is imported
initGoogleAnalytics();
