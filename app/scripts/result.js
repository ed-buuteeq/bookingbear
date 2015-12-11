$(function(){
    initPanda();
});

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

function initPanda() {
    var $panda = $("#bear");
    TweenLite.to($panda, 3, { bottom: '50px' , delay: 5});
    pandaTalk($panda, 8);
}

