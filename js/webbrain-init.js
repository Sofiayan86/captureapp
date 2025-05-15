/**
 * Enhanced WebBrain Widget Integration
 * 
 * This script provides enhanced loading and error handling for the WebBrain widget.
 * It handles edge cases such as widget loading failures and initialization errors.
 */

// Function to initialize WebBrain with error handling
function initializeWebBrain() {
  // Check if WebBrain script has loaded
  if (typeof WebBrain !== 'undefined') {
    try {
      // Configuration (in production, this could come from environment variables)
      const webBrainConfig = {
        userId: "uALxkNyTT8NZ6DVTAR7AIxFTYOY2", 
        requireLogin: false,
        theme: "dark",
        widgetTitle: "Capture AI Agent",
        brandColor: "#027FE5",
        welcomeMessage: "Hi, I'm your AI agent to help you use Capture. Start by asking any question related to Capture—for example, "What is Capture?""
      };
      
      // Initialize WebBrain
      WebBrain.init(webBrainConfig);
      console.log("WebBrain widget initialized successfully");
    } catch (error) {
      // Handle initialization errors
      console.error("Error initializing WebBrain widget:", error);
    }
  } else {
    console.error("WebBrain widget failed to load");
  }
}

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Try to initialize immediately if already loaded
  initializeWebBrain();
  
  // Try again after a delay in case the script loads late
  setTimeout(initializeWebBrain, 2000);
});
