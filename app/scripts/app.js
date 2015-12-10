$(function(){
    var list = [{
        name:'Dubai',
        view:['city','mountain','natural'],
        price: 2,
        travletype:['family','single']
    },{
        name:'Beijing',
        view:['city','history','museum','mountain','shopping'],
        price: 3,
        travletype:['family','romantic','single']
    }];
    showResult(list);
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
        var travletype = $(hoteldiv.find('.city-travletype'));
        travletype.empty();
        $.each(hotel.travletype, function(i,v){
            travletype.append('<img src="styles/image/view/'+ v.toLowerCase()+'.png" title="'+v+'"/>');
        });
        $('#hotel-list ul').append(hoteldiv);
    });
}