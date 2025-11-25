// Q3 jQuery FAQ behaviors
$(function(){
  // Click question toggles answer visibility
  $('#faq').on('click', '.q', function(){ $(this).next('.a').slideToggle(); });

  // Hover to change question color
  $('#faq').on('mouseenter', '.q', function(){ $(this).css('color','#007'); })
           .on('mouseleave', '.q', function(){ $(this).css('color',''); });

  // Double-click question collapses all answers
  $('#collapseAll').on('click', function(){ $('.a').slideUp(); });
  $('#faq').on('dblclick', '.q', function(){ $('.a').slideUp(); });

  // Focus on answer input highlights parent question
  $('#faq').on('focus', 'input', function(){ $(this).closest('.qa').find('.q').css('background','#fffae6'); })
           .on('blur', 'input', function(){ $(this).closest('.qa').find('.q').css('background',''); });
});