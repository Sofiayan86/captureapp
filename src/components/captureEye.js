/**
 * Capture Eye Component
 * 
 * This module handles the initialization and functionality of the Capture Eye
 * verification badge component.
 */

// Default configuration for the Capture Eye component
const DEFAULT_CONFIG = {
  selector: '.capture-eye',
  animationDuration: 1000,
  pulseEffect: true
};

/**
 * Initialize the Capture Eye component with the given configuration
 * 
 * @param {Object} config - Configuration options
 * @returns {Object} The initialized Capture Eye instance
 */
export function initializeCaptureEye(config = {}) {
  // Merge default config with provided config
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  
  // Select all Capture Eye elements
  const eyeElements = document.querySelectorAll(mergedConfig.selector);
  
  if (eyeElements.length === 0) {
    console.warn('No Capture Eye elements found with selector:', mergedConfig.selector);
    return null;
  }
  
  console.log(`Initializing ${eyeElements.length} Capture Eye element(s)`);
  
  // Apply functionality to each element
  eyeElements.forEach(eye => {
    // Store the original markup for verification purposes
    const originalHTML = eye.innerHTML;
    eye.setAttribute('data-original', originalHTML);
    
    // Add event listeners
    eye.addEventListener('click', handleCaptureEyeClick);
    
    // Add animation if enabled
    if (mergedConfig.pulseEffect) {
      eye.classList.add('capture-eye--pulse');
    }
  });
  
  // Return the public API
  return {
    elements: eyeElements,
    update: updateCaptureEye,
    destroy: destroyCaptureEye
  };
}

/**
 * Handle click events on the Capture Eye element
 * 
 * @param {Event} event - The click event
 */
function handleCaptureEyeClick(event) {
  const eye = event.currentTarget;
  const contentId = eye.getAttribute('data-content-id');
  
  if (!contentId) {
    console.error('No content ID found for Capture Eye element');
    return;
  }
  
  // Toggle active state
  eye.classList.toggle('capture-eye--active');
  
  // Emit custom event that can be listened to by other components
  const detail = {
    contentId,
    element: eye,
    active: eye.classList.contains('capture-eye--active')
  };
  
  const captureEvent = new CustomEvent('capture:eye:click', { detail });
  document.dispatchEvent(captureEvent);
  
  console.log(`Capture Eye clicked for content ID: ${contentId}`);
}

/**
 * Update Capture Eye elements with new data
 * 
 * @param {Object} data - New verification data
 */
function updateCaptureEye(data) {
  if (!data || !data.contentId) {
    console.error('Invalid data provided for Capture Eye update');
    return;
  }
  
  const selector = `[data-content-id="${data.contentId}"]`;
  const eyeElement = document.querySelector(selector);
  
  if (!eyeElement) {
    console.warn(`No Capture Eye element found for content ID: ${data.contentId}`);
    return;
  }
  
  // Update verification status
  eyeElement.setAttribute('data-verified', data.verified ? 'true' : 'false');
  
  if (data.verified) {
    eyeElement.classList.add('capture-eye--verified');
  } else {
    eyeElement.classList.remove('capture-eye--verified');
  }
}

/**
 * Remove Capture Eye functionality and restore original elements
 */
function destroyCaptureEye() {
  const eyeElements = document.querySelectorAll(DEFAULT_CONFIG.selector);
  
  eyeElements.forEach(eye => {
    // Remove event listeners
    eye.removeEventListener('click', handleCaptureEyeClick);
    
    // Remove added classes
    eye.classList.remove('capture-eye--pulse');
    eye.classList.remove('capture-eye--active');
    eye.classList.remove('capture-eye--verified');
    
    // Restore original HTML if available
    const originalHTML = eye.getAttribute('data-original');
    if (originalHTML) {
      eye.innerHTML = originalHTML;
    }
  });
}

// Initialize the component when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.CaptureEye = initializeCaptureEye();
});
