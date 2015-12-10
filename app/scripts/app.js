$(function(){
    var list = $.getJSON('./data/data.json', function(data) {
      showResult(data.data);
    });
});

function showResult(list){
    $('#hotel-list ul').empty();
    $.each(list, function(i, hotel){
        var hoteldiv = $('#hotel').clone();
        hoteldiv.click(function(){
            location.href='result.html?city=' + hotel.name;
        });
        $(hoteldiv.find('.city-photo img')).attr('src','styles/image/city/'+hotel.name.toLowerCase()+'.jpg');
        $(hoteldiv.find('.city-name')).html(hotel.name);
        var price = $(hoteldiv.find('.city-price'));
        for(var i=0;i<hotel.price;i++){
            price.append("$");
        }
        var view = $(hoteldiv.find('.city-view'));
        view.empty();
        $.each(hotel.view, function(i,v){
            view.append('<img src="styles/image/view/'+ v.toLowerCase()+'.png" title="'+v+'"/>');
        });
        var traveltype = $(hoteldiv.find('.city-traveltype'));
        traveltype.empty();
        $.each(hotel.traveltype, function(i,v){
            traveltype.append('<img src="styles/image/view/'+ v.toLowerCase()+'.png" title="'+v+'"/>');
        });
        $('#hotel-list ul').append(hoteldiv);
    });
}