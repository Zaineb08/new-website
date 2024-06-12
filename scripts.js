// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading delay
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';}, 5000); // 4 seconds delay for demonstration
  });
  