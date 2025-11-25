// Q2 jQuery logic
// Highlight, hover details, favorite toggle, attribute selector for discounts, out-of-stock alert

$(function(){
  const $products = $('#products');

  // Click product to highlight using event delegation
  $products.on('click', '.product', function(){
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
  });

  // Hover to show more details (simulated with title)
  $products.on('mouseenter', '.product', function(){
    const name = $(this).data('name');
    const discount = $(this).data('discount');
    $(this).append(`<div class="details">Discount: ${discount}%</div>`);
  }).on('mouseleave', '.product', function(){
    $(this).find('.details').remove();
  });

  // Favorite icon toggles selected class
  $products.on('click', '.fav', function(e){
    e.stopPropagation(); // prevent parent click highlight
    $(this).toggleClass('selected');
  });

  // Apply styles to products with discount using attribute selector
  $('[data-discount!="0"]').css({'background-color':'#f9fff0'});

  // Alert if out of stock on click
  $products.on('click', '.product', function(){
    const stock = $(this).data('stock');
    if (stock === 0) alert('Product out of stock!');
  });
});