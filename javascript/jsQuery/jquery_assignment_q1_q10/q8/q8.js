// Q8 blog admin: append, prepend, remove last, add tags using before/after, highlight keywords
$(function(){
  $('#add').on('click', function(){
    $('#posts').append('<li class="post">New Post ' + Date.now() + '</li>');
  });
  $('#prepend').on('click', function(){
    $('#posts').prepend('<li class="post featured">Featured Post ' + Date.now() + '</li>');
  });
  $('#removeLast').on('click', function(){ $('#posts li').last().remove(); });

  // Add tags around posts (before/after)
  $('#posts').on('mouseenter', '.post', function(){
    $(this).before('<span class="tag">[TAG]</span>');
    $(this).after('<span class="tag">[END]</span>');
  }).on('mouseleave', '.post', function(){
    $('.tag').remove();
  });

  // Highlight posts with keyword 'Guide' dynamically
  $('#posts .post').each(function(){
    if ($(this).text().includes('Guide')) $(this).css('background','#dff');
  });
});