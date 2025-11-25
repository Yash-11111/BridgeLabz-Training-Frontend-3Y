// Q7 search and highlight matched text, toggle visibility, show count
$(function(){
  $('#search').on('keyup', function(){
    const q = $(this).val().toLowerCase();
    let count = 0;
    $('#courses .course').each(function(){
      const txt = $(this).text();
      if (txt.toLowerCase().includes(q) && q!==''){
        // highlight matched substring using css
        $(this).css('background','#fffbcc').show();
        count++;
      } else if (q==='') {
        $(this).css('background','').show();
      } else {
        $(this).hide();
      }
    });
    $('#count').text(count + ' matched');
  });

  $('#clear').on('click', function(){ $('#search').val(''); $('#courses .course').show().css('background',''); $('#count').text(''); });
});