document.addEventListener("DOMContentLoaded", function () {
    // Get the video element
    const videoElement = document.querySelector("video source");
  
    // Array of theme video sources
    const themes = ["capture (1).webm", "capture (2).webm", "capture (3).webm", "capture.webm"];
  
    // Variable to track the current theme index
    let currentThemeIndex = 0;
  
    // Get the theme toggle button by its ID
    const themeToggleButton = document.getElementById("theme-toggle-btn");
  
    // Select all elements with the class 'poetry'
    const poetryElements = document.querySelectorAll(".poetry");
    const introElement = document.getElementById("intro");
    const headingElements = document.querySelectorAll("h1");
  
    // Function to update the text color based on the theme
    function updateTextColor() {
      if (currentThemeIndex === 1 || currentThemeIndex === 2) {
        // When theme is 2 or 3, change text to white
        poetryElements.forEach(poetry => poetry.style.color = "white");
        introElement.style.color = "white";
        headingElements.forEach(h1 => h1.style.color = "white");
      } else {
        // When theme is 1 or 4, change text to black
        poetryElements.forEach(poetry => poetry.style.color = "black");
        introElement.style.color = "black";
        headingElements.forEach(h1 => h1.style.color = "black");
      }
    }
  
    // Add an event listener to the button for the theme toggle
    themeToggleButton.addEventListener("click", function () {
      // Increment the current theme index and loop back if necessary
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  
      // Set the video source to the next theme in the array
      videoElement.setAttribute("src", themes[currentThemeIndex]);
  
      // Load the new video source
      videoElement.parentElement.load();
  
      // Update the text color based on the new theme
      updateTextColor();
    });
  });
  