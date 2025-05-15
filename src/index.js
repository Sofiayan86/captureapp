/**
 * Capture App - Main entry point
 * 
 * This file serves as the main entry point for the Capture application.
 * It loads all required modules and initializes the application.
 */

// Import styles
import './styles/main.css';
import './styles/main.scss';

// Import utilities
import './utils/analytics';
import { setupLazyWebBrainInit } from './utils/webBrain';
import { formatDate, getRelativeTime } from './utils/dateUtils';

// Import components
import { initializeCaptureEye } from './components/captureEye';

// Make utilities available globally for legacy script compatibility
window.CaptureUtils = {
  formatDate,
  getRelativeTime
};

/**
 * Initialize the application when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Capture App initializing...');
  
  // Initialize WebBrain widget with lazy loading
  setupLazyWebBrainInit();
  
  // Initialize Capture Eye component
  const captureEye = initializeCaptureEye({
    selector: '.capture-eye',
    pulseEffect: true
  });
  
  // Initialize auto video functionality
  if (window.fsAttributes && window.fsAttributes.autovideo) {
    window.fsAttributes.autovideo.loading.then(autoVideoInstances => {
      console.log('Auto video initialized', autoVideoInstances);
    });
  }
  
  // Initialize scroll disable functionality
  if (window.fsAttributes && window.fsAttributes.scrolldisable) {
    window.fsAttributes.scrolldisable.loading.then(() => {
      console.log('Scroll disable initialized');
    });
  }
  
  console.log('Capture App initialized successfully');
});

// Handle service worker registration in production
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
