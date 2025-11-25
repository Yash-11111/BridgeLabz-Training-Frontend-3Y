// Q5 team interactions using jQuery traversal methods
$(function(){
  // Click manager to highlight direct reports
  $('.manager').on('click', function(){
    $(this).find('.reports .employee').addClass('highlight');
  });

  // Hover employee to show contact info using .next() (simulate next element)
  $('.employee').on('mouseenter', function(){
    $(this).after('<div class="contact">contact@example.com</div>');
  }).on('mouseleave', function(){
    $(this).next('.contact').remove();
  });

  // Click department to change background of children using .children()
  $('.deptName').on('click', function(){
    $(this).closest('.department').children('ul').find('.employee').css('background','#eef');
  });

  // Select random employee and highlight siblings
  function randomHighlight(){
    const $emps = $('.employee');
    const idx = Math.floor(Math.random() * $emps.length);
    $emps.eq(idx).siblings().addClass('siblingHighlight');
  }
  randomHighlight();

  // Collapse/expand team using parent() and find()
  $('.deptName').on('dblclick', function(){
    $(this).parent().find('.reports').toggle();
  });
});