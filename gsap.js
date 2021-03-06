let timeout;
$('.container').mousemove(function(e){
    if(timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);
});

function callParallax(e){
    parallaxIt(e, '.slide.one', -100);
    parallaxIt(e, '.slide.two', -20);
    parallaxIt(e, '.slide.three', 10);
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
