$(function(){
    var city = getUrlParameter('city');
    $.each(list.data, function(i, v){
        if(v.name.toLowerCase() == city.toLowerCase()){
            $('#hotel-page').attr('src',v.link);
            $('#city-name').html(v.name);
        }
    });
    $('.returnBtn').click(function(){
        history.go(-1);
    });
});

