var anim = new TimelineMax();

anim
    // .from(".leftlargepannel", 1, { height: 0 })
    .from(".leftlargepannel", 0.6, { transform: "scaleY(1)" })
    .to(".rightlargepannel", 0.6, { transform: "scaleY(1)" }, "-=0.3")
    .to(".leftsmallpannel", 0.3, { transform: "scaleY(1)" }, "-=0.1")
    .to(".rightsmallpannel", 0.3, { transform: "scaleY(1)" }, "-=0.1")
// .from(".texte", 1, { y: 10, autoAlpha: 0 })


var controller = new ScrollMagic.Controller();
var magic = new TimelineMax();

magic
    .from("#card1", 0.3, { ease: Power0.easeInOut, x: 50, opacity: 0 })
    .from("#card2", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card3", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card4", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card5", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card6", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card7", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card8", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card9", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card10", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card11", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card12", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card13", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card14", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card15", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card16", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card17", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card18", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card19", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card20", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card21", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card22", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1")
    .from("#card23", 0.2, { ease: Power0.easeInOut, x: 50, opacity: 0 }, "+=0.1");


var scene = new ScrollMagic.Scene({
    triggerElement: '.card-container',
    offset: 150,
    // duration: 4000,
    reverse: true
})

    .addTo(controller)

    .addIndicators({
        colorStart: 'green',
        colorTrigger: 'red'
    })

    .setTween(magic)


var controller = new ScrollMagic.Controller();
var ada = new TimelineMax();

ada
    .from(".image-ada", 0.5, { ease: Power0.easeInOut, opacity: 0 })
    .from(".boldTitle", 0.3, { ease: Power0.easeInOut, x: 70, opacity: 0 }, "+=0.1")
    .from(".text", 0.3, { ease: Power0.easeInOut, y: 70, opacity: 0 }, "+=0.1");


var scene = new ScrollMagic.Scene({
    triggerElement: '.cadre-container',
    offset: 150,
    // duration: 50,
    reverse: true
})

    .addTo(controller)

    .addIndicators({
        colorStart: 'green',
        colorTrigger: 'red'
    })

    .setTween(ada)
