let timeoutT;
$('.container').mousemove(function(e){
    if(timeoutT) clearTimeout(timeoutT);
    setTimeout(callParallax.bind(null, e), 200);
});

function callParallax(e){
    parallaxIt(e, '.slide.one', -50);
    parallaxIt(e, '.img', -30);
}

function parallaxIt(e, target, movement){
    let $this = $('.container');
    let relX = e.pageX - $this.offset().left;
    let relY = e.pageY - $this.offset().top;

    gsap.to(target, 1, {
        x: (relX - $this.width()/2) / $this.width() * movement,
        y: (relY - $this.height()/2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}
