$(function(){
    var city = getUrlParameter('city');
    $.each(list.data, function(i, v){
        if(v.name.toLowerCase() == city.toLowerCase()){
            $('#hotel-page').attr('src',v.link);
            $('#city-name').html(v.name);
        }
    });
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
