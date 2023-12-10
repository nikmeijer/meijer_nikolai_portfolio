let posX = 0,
    posY = 0;

let mouseX = 0,
    mouseY = 0;

gsap.to(".cursor", {
    duration: 0.018,
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        gsap.set(".cursor", {
            css: {
                left: posX - 1,
                top: posY - 2
            }
        });
    }
});

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

