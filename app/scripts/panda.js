function firstQuestion(){
	$('.popover-panda .popover').show();
}

function pandaTalk($panda, delay) {
    $pandaHead = $panda.find('.head');
    for (var i=0; i < 3; i++) {
        TweenLite.to($pandaHead, 1, {transform: 'rotate(-8deg)', delay: delay++});
        TweenLite.to($pandaHead, 1, {transform: 'rotate(8deg)', delay: delay++});
    }
    TweenLite.to($pandaHead, 1, {transform: 'rotate(1deg)', delay: delay, onComplete: firstQuestion});
    return delay + 1;
}

function pandaChuckle($panda, delay) {
	$pandaHead = $panda.find('.head');
	for (var i=0; i < 3; i++) {
		delay = pandaMiniChucke($pandaHead, delay);
		delay += 2.5;
	}
}

function pandaMiniChucke($pandaHead, delay) {
	for (var i=0; i < 3; i++) {
		TweenLite.to($pandaHead, 0.2, {top: '54px', delay: delay});
		TweenLite.to($pandaHead, 0.2, {top: '48px', delay: delay + 0.2});
		delay += 0.4;
	}
	return delay;
}
