document.addEventListener('mousemove', function(e) {
    let moveX = (e.clientX / window.innerWidth) - 0.5;
    let moveY = (e.clientY / window.innerHeight) - 0.5;

    document.querySelector('.layer1').style.transform = `translate(-50%, -50%) translateZ(-500px) rotateY(${45 + moveX * 10}deg) rotateX(${moveY * 5}deg)`;
    document.querySelector('.layer2').style.transform = `translate(-50%, -50%) translateZ(-300px) rotateY(${30 + moveX * 10}deg) rotateX(${moveY * 5}deg)`;
    document.querySelector('.layer3').style.transform = `translate(-50%, -50%) translateZ(-100px) rotateY(${15 + moveX * 10}deg) rotateX(${moveY * 5}deg)`;
    document.querySelector('.layer4').style.transform = `translate(-50%, -50%) rotateY(${0 + moveX * 10}deg) rotateX(${moveY * 5}deg)`;
});
