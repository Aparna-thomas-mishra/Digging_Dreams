// script.js

// Function to load HTML into a div
function loadHTML(elementId, url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading HTML:', error);
    });
}

// Load header and footer
loadHTML('header', 'header.html');
loadHTML('footer', 'footer.html');
