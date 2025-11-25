// Q1 jQuery logic
// On page load, set greeting based on time of day, handle buttons and click alert.

$(function(){ // DOM ready
  function timeGreeting(){
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }
  // Set initial greeting
  $('#greeting').text(timeGreeting() + ', visitor!');

  // Change to motivational quote on button click
  $('#changeGreeting').on('click', function(){
    $('#greeting').text('Keep pushing — progress beats perfection!');
  });

  // Toggle welcome message visibility
  $('#toggleWelcome').on('click', function(){
    $('#welcomeMsg').toggle(); // show/hide element
  });

  // Show alert when greeting clicked
  $('#greeting').on('click', function(){
    alert('You clicked the greeting — welcome again!');
  });
});