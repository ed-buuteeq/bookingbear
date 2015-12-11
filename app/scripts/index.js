$(function(){
    initPanda();
});

function initPanda() {
    var delay = 0,
    	$panda = $("#bear");
    TweenLite.to($panda, 3, { left: '50px' , delay: delay});
    delay = pandaTalk($panda, delay + 5);
    delay = pandaTalk($panda, delay + 5);
    delay = pandaTalk($panda, delay + 5);
}