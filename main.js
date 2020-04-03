var app = document.getElementById('type-hey');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hey, we are TDP Graphic!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('We do everything you need <br> on the internet.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Scroll me down!')
    .pauseFor(2500)
    .start();

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }