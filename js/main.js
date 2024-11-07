
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.navbar-nav .nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

let countOne = document.querySelector('.count-one');
let countTwo = document.querySelector('.count-two');
let countThree = document.querySelector('.count-three');
let countFour = document.querySelector('.count-four');

const animateCounter = (element, start, end, duration) => {
    let startTime = null;
    const step = (currentTime) => {
        if(!startTime) {
            startTime = currentTime;
        }
        let progress = Math.min((currentTime - startTime) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}
animateCounter(countOne, 10, 850, 3500);
animateCounter(countTwo, 10, 230, 2000);
animateCounter(countThree, 10, 9450, 4500);
animateCounter(countFour, 10, 780, 3000);