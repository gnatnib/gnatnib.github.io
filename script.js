document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    let effect = new Effect(canvas.width, canvas.height, ctx);

    function animate() {
        effect.update();
        requestAnimationFrame(animate);
    }

    animate();
});