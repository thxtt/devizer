const burger = document.querySelector('#burger');
const navList = document.querySelector('#navigation__list');
$(document).ready(function() {
    $('#burger').click(function(event) {
        $('#burger, #navigation__list').toggleClass('active');
    });
}); 