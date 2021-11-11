const header = document.querySelector('.header');
const mobileHamburger = header.querySelector(".mobile-hamburger");
const mobileNav = header.querySelector(".mobile-nav");

mobileHamburger.addEventListener('click', ()=>{
    mobileNav.classList.toggle('open');
    mobileHamburger.classList.toggle('alternate');
});

let timeline = gsap.timeline();
let timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".text",
        start: "-10%",
        end: "80%",
        scrub: 1,
        pin: true
    }
});
let timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "0%",
        end: "100%",
        scrub: 1,
        pin:true
    }
});
let timeline4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".random",
        start: "0%",
        end: "100%",
        scrub: 1,
        pin:true
    }
});

timeline.to('.hero-head h1', .25, { 
    y: 0, 
    opacity: 1,
    ease: 'power4.out',
    skewY: 10
}).to('.hero-head h1', .25, {
    skewY: 0
}).to('.paragraph-text p span', .25, {
    opacity: 1,
    ease: 'power4.out',
    delay: .25,
    stagger: {
        amount: .25
    }
}).to('.paragraph-text .button', .25, {
    borderRadius: "50px 0 50px 0"
});

timeline2.to('.text', .25, {
    x: -200,
    opacity: 0
});

timeline3.fromTo('.about .background', .25, {
    width: "0%"
}, {width: "100%"})
.to('.about .top-image-wrapper img', .25, {
    y: 0
})
.to(".about .section-text .heading h1", .25, {
    y: 0
})
.to(".about .section-text .paragraph p", .25, {
    y:0,
    stagger: {
        amount: .25
    }
});

timeline4.to('.random .main-section-text h1', .25, {
    x: "-12vw"
})

window.addEventListener('load', ()=>{
    const verticalHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${verticalHeight}px`);
    setTimeout(()=>{
        window.scrollTo(0,1);
    }, 0);
});