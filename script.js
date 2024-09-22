
document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => populateWebsite(data));
  });
  
  function populateWebsite(data) {
    // Populate About Section
    document.getElementById('intro').innerHTML = `<p>${data.about.intro}</p>`;
  
    // Populate Education Section
    const educationSection = document.querySelector('.education-cards');
    educationSection.innerHTML = '';
    data.education.forEach(item => {
      const card = `
        <div class="education-card">
          <h3>${item.school}</h3>
          <p>${item.location || ''}</p>
          <p>${item.degree}</p>
          <p>${item.duration}</p>
        </div>
      `;
      educationSection.innerHTML += card;
    });
  
    // Populate Skills Section
    const softSkills = document.querySelector('.skills-card:nth-of-type(1) ul');
    const hardSkills = document.querySelector('.skills-card:nth-of-type(2) ul');
    const coCurricularSkills = document.querySelector('.skills-card:nth-of-type(3) ul');
    const uavVideoContainer = document.querySelector('.video-container iframe');
  
    softSkills.innerHTML = '';
    hardSkills.innerHTML = '';
    coCurricularSkills.innerHTML = '';
  
    data.skills.softSkills.forEach(skill => {
      softSkills.innerHTML += `<li>${skill}</li>`;
    });
    data.skills.hardSkills.forEach(skill => {
      hardSkills.innerHTML += `<li>${skill}</li>`;
    });
    data.skills.coCurricularSkills.forEach(skill => {
      coCurricularSkills.innerHTML += `<li>${skill}</li>`;
    });
    
    uavVideoContainer.src = data.skills.uavVideo.url;
  
    // Populate Projects Section
    const projectsSection = document.querySelector('.projects-cards');
    projectsSection.innerHTML = '';
    data.projects.forEach(project => {
      const card = `
      <div class="project-card">
      <h3>${project.title}</h3>
          <p><em>${project.date}</em></p>
          <p>${project.description}</p>
          </div>
      `;
      projectsSection.innerHTML += card;
    });
  
    // Populate Certifications Section
    const certificationsSection = document.querySelector('.certifications-cards');
    certificationsSection.innerHTML = '';
    data.certifications.forEach(certification => {
      const card = `
      <div class="certification-card">
      <h3>${certification.title}</h3>
      <p><em>${certification.date}</em></p>
        </div>
      `;
      certificationsSection.innerHTML += card;
    });
  
    // Populate Poetry Section
    const poetrySection = document.querySelector('.poetry');
    poetrySection.innerHTML = '';
  
    data.poetry.forEach(line => {
      poetrySection.innerHTML += `<p>${line}</p>`;
    });
  }
  
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
    const poetryElements = document.querySelector(".poetry");
    const introElement = document.getElementById("intro");
    const headingElements = document.querySelectorAll("h1");
  
    // Function to update the text color based on the theme
    function updateTextColor() {
      if (currentThemeIndex === 1 || currentThemeIndex === 2) {
        // When theme is 2 or 3, change text to white
        //poetryElements.style.color = "white";
        introElement.style.color = "white";
        headingElements.forEach(h1 => h1.style.color = "white");
      } else {
        // When theme is 1 or 4, change text to black
        //poetryElements.style.color = "black";
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