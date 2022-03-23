$('#card-number').keyup(function (e) { 
    let value = $(this).val().toString().match(/.{4}/g).join(' ');
    $('.card_numer').text(value);
});

$('#card-holder').keyup(function (e) { 
    $('.card__info.main').text($(this).val());
});

$('#month').keyup(function (e) { 
    $('.month').text($(this).val());
});

$('#year').keyup(function (e) { 
    $('.year').text($(this).val());
});

$('#cvv').keyup(function (e) { 
    $('.card__secret--last').text($(this).val());
});