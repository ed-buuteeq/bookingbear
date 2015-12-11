function pandaTalk($panda, delay) {
    $pandaHead = $panda.find('.head');
    for (var i=0; i < 3; i++) {
        TweenLite.to($pandaHead, 1, {transform: 'rotate(-8deg)', delay: delay++});
        TweenLite.to($pandaHead, 1, {transform: 'rotate(8deg)', delay: delay++});
    }
    TweenLite.to($pandaHead, 1, {transform: 'rotate(1deg)', delay: delay});
}
