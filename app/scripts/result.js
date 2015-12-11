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
    var delay = 0,
        $panda = $("#bear");
    TweenLite.to($panda, 1, { transform: 'rotate(180deg)', delay: delay});
    TweenLite.to($panda, 3, { top: '50px' , delay: delay + 5});
    TweenLite.to($panda, 2, { transform: 'rotate(1deg)', delay: delay + 8});
    pandaTalk($panda, delay + 11);
}

