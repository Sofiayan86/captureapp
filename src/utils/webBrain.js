/**
 * WebBrain Integration
 * 
 * This module handles initialization and configuration of the WebBrain AI chat widget.
 * It provides enhanced error handling and configuration options.
 * Updated to use lazy loading for improved performance.
 */

// Configuration object for WebBrain
const WEBBRAIN_CONFIG = {
  userId: "uALxkNyTT8NZ6DVTAR7AIxFTYOY2", 
  requireLogin: false,
  theme: "dark",
  widgetTitle: "Capture AI Agent",
  brandColor: "#027FE5",
  welcomeMessage: "Hi, I'm your AI agent to help you use Capture. Start by asking any question related to Capture—for example, 'What is Capture?'"
};

/**
 * Load WebBrain script asynchronously
 * @returns {Promise} Resolves when script is loaded or rejects on error
 */
export const loadWebBrainScript = () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('webbrain-script')) {
      resolve(); // Script already loaded
      return;
    }

    const script = document.createElement('script');
    script.id = 'webbrain-script';
    script.src = 'https://cdn.web-brain.io/js/web-brain-bot.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load WebBrain script'));
    
    document.head.appendChild(script);
  });
};

/**
 * Initialize WebBrain widget with error handling
 * @returns {Promise} Resolves when initialization is complete or rejects on error
 */
export function initializeWebBrain() {
  return new Promise((resolve, reject) => {
    try {
      // First, load the WebBrain script if not already loaded
      loadWebBrainScript()
        .then(() => {
          // Check if WebBrain is available
          if (typeof WebBrain !== 'undefined') {
            // Initialize the widget
            WebBrain.init(WEBBRAIN_CONFIG);
            console.log("WebBrain widget initialized successfully");
            resolve(true);
          } else {
            // Set up a retry mechanism
            let attempts = 0;
            const maxAttempts = 3;
            const retryInterval = 1000; // 1 second
            
            const checkAndInit = () => {
              attempts++;
              if (typeof WebBrain !== 'undefined') {
                WebBrain.init(WEBBRAIN_CONFIG);
                console.log("WebBrain widget initialized successfully on attempt " + attempts);
                resolve(true);
              } else if (attempts < maxAttempts) {
                console.log(`WebBrain not available, retrying (${attempts}/${maxAttempts})...`);
                setTimeout(checkAndInit, retryInterval);
              } else {
                const error = new Error("WebBrain widget failed to load after multiple attempts");
                console.error(error);
                reject(error);
              }
            };
            
            // Start retry process
            setTimeout(checkAndInit, retryInterval);
          }
        })
        .catch(error => {
          console.error("Failed to load WebBrain script:", error);
          reject(error);
        });
    } catch (error) {
      console.error("Error initializing WebBrain widget:", error);
      reject(error);
    }
  });
}

/**
 * Initialize WebBrain on user interaction for better performance
 * Call this method to set up event listeners for lazy initialization
 */
export function setupLazyWebBrainInit() {
  // Initialize WebBrain only when user interacts with the page
  const initOnInteraction = () => {
    initializeWebBrain()
      .then(() => {
        // Remove event listeners after successful initialization
        document.removeEventListener('click', initOnInteraction);
        document.removeEventListener('scroll', initOnInteraction);
      })
      .catch(error => console.error("Lazy WebBrain init failed:", error));
    
    // Remove event listeners even if initialization fails
    document.removeEventListener('click', initOnInteraction);
    document.removeEventListener('scroll', initOnInteraction);
  };

  // Add event listeners for common user interactions
  document.addEventListener('click', initOnInteraction, { once: true });
  document.addEventListener('scroll', initOnInteraction, { once: true });
  
  // Also initialize after a delay if no interaction occurs
  setTimeout(() => {
    initializeWebBrain().catch(error => console.error("Delayed WebBrain init failed:", error));
  }, 5000);
}

// Export configuration for use in other modules if needed
export const webBrainConfig = WEBBRAIN_CONFIG;
