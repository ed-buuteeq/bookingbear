$(function(){
    var city = getUrlParameter('city');
    // to-do: load json file
    var data = {
        name: city,
        link: 'https://www.booking.com/city/ae/dubai.html?label=gen173bo-17CAQoggJCDHNlYXJjaF9kdWJhaUgzWANyBXVzX3dhiAEBmAExuAEEyAEE2AEB6AEB-AECkgIBeZgCAg;sid=901363ff0b5c3bcd1ffb5293526df10b;dcid=1'
    };
    $('#hotel-page').attr('src',data.link);
    $('#city-name').html(data.name);
    $('.returnBtn').click(function(){
        location.href='index.html';
    });
});

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
