$(function(){
    var defaultval = {
        "weather" : 2,
        "view" : ["natural", "mountain", "city"],
        "nightlife" : 2,
        "price" : 1,
        "food" : [1, 1, 1],
        "culture" : [2, 2, 2],
        "language" : 1,
        "traveltype" : ["family", "single"],
        "link" : "http://www.booking.com/city/us/seattle.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmcgV1c193YYgBAZgBMbgBBMgBBNgBA-gBAfgBAg;sid=901363ff0b5c3bcd1ffb5293526df10b;dcid=1;city=20144883;lp_index2sr=1;ilp=1"
    };
    showResult(list.data);
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
            view.append('<img src="styles/image/icon/'+ v.toLowerCase()+'.png" title="'+v+'"/>');
        });
        var traveltype = $(hoteldiv.find('.city-traveltype'));
        traveltype.empty();
        $.each(hotel.traveltype, function(i,v){
            traveltype.append('<img src="styles/image/view/'+ v.toLowerCase()+'.png" title="'+v+'"/>');
        });
        $('#hotel-list ul').append(hoteldiv);
    });
}