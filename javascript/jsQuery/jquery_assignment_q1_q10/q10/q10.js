// Q10 Registration validation using jQuery - check required, format, uniqueness
$(function(){
  function isEmailValid(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
  $('#reg').on('submit', function(e){
    e.preventDefault(); // prevent actual submit
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const pass = $('#password').val();

    let ok = true;
    $('#msg').text('');

    if (!name) { ok=false; $('#name').css('border','2px solid red'); } else $('#name').css('border','');
    if (!isEmailValid(email)) { ok=false; $('#email').css('border','2px solid red'); } else $('#email').css('border','');
    // uniqueness check against existing users list (simple front-end check)
    const exists = $('#users li').toArray().some(li => $(li).text()===email);
    if (exists) { ok=false; $('#email').css('border','2px solid red'); $('#msg').text('Email already registered'); }

    if (pass.length < 8) { ok=false; $('#password').css('border','2px solid red'); } else $('#password').css('border','');

    if (ok){ $('#msg').css('color','green').text('Registration successful!'); } else { $('#msg').css('color','red'); }
  });
});