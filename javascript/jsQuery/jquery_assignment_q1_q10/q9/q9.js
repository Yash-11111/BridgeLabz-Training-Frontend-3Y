// Q9 demonstrate noConflict and use of two jQuery versions
// jQuery 1 will be assigned to jq1, jQuery 3 will be assigned to jq3
var jq1 = jQuery.noConflict(true); // returns the older first loaded (1.12.4)
var jq3 = jQuery; // now points to 3.6.0

// Using jq1 for carousel rotation (simulation)
jq1(function(){
  var idx=0;
  setInterval(function(){
    jq1('#carousel').text('Carousel slide ' + (++idx));
  },2000);
});

// Using jq3 for modals and tooltips
jq3(function(){
  jq3('#modal').on('click', function(){ alert('Modal clicked (handled by jQuery 3)'); });
  jq3('.widgets div').on('mouseenter', function(){ jq3(this).css('background','#ffd'); }).on('mouseleave', function(){ jq3(this).css('background',''); });
});