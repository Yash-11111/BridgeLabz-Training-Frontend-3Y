// Q6 subscription panel showing .on(), .off(), dynamic add/remove and success messages
$(function(){
  function showMsg(text){ $('#messages').text(text).fadeIn().delay(1000).fadeOut(); }

  // Subscribe/Unsubscribe handlers via delegation
  $('#topics').on('click', '.sub', function(){
    $(this).text('Subscribed').attr('disabled', true);
    showMsg('Notifications enabled');
  });

  $('#topics').on('click', '.unsub', function(){
    $(this).siblings('.sub').text('Subscribe').attr('disabled', false);
    showMsg('Notifications disabled');
  });

  // Add new topic dynamically and attach events automatically because of delegation
  $('#addTopic').on('click', function(){
    const name = $('#newTopic').val().trim();
    if (!name) return;
    $('#topics').append(`<li>${name} <button class="sub">Subscribe</button> <button class="unsub">Unsubscribe</button></li>`);
    $('#newTopic').val('');
    showMsg('Topic added');
  });

  // Remove specific subscription by turning off events (demonstration)
  $('#topics').on('click', '.removeTopic', function(){
    $(this).closest('li').remove();
  });
});