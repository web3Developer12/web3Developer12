const triggerAnimationHero = () => {
  gsap.to(".divider", {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 1,
    stagger: 0.05,
  });
  gsap.fromTo(
    ".ch > p",
    { y: 100, opacity: 0, skewY: 70 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.8,
      ease: Expo.easeInOut,
      skewY: 0,
    }
  );
  gsap.to(".captions > p", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 0.5,
    stagger: 0.05,
  });
  gsap.fromTo(
    ".card",
    { y: 100, opacity: 0, skewY: -70 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.005,
      duration: 1,
      ease: Expo.easeInOut,
      skewY: 0,
    }
  );
};
const triggerAnimationReveal = () => {
  gsap.to(".text", {
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
  });

  gsap.to(".texts > div", {
    x: -500,
    ease: Expo.easeInOut,
    delay: 2,
    stagger: 0.05,
  });

  gsap.to(".texts", {
    y: -600,
    rotate: -90,
    scale: 4.5,
    duration: 3,
    ease: Expo.easeInOut,
    delay: 3,
  });

  gsap.to(".text", {
    opacity: 1,
    fontWeight: 300,
    ease: Expo.easeInOut,
    delay: 4.5,
  });

  gsap.to(".texts > div", {
    x: -3500,
    ease: Expo.easeInOut,
    delay: 5,
    stagger: 0.05,
  });

  gsap.to(".reveal-container", {
    y: 870,
    delay: 6,
    ease: Expo.easeInOut,
    display: "none",
    onanimationend: function () {
      triggerAnimationHero();
    },
  });
};

triggerAnimationReveal();


let mouseDownCard = false;
const onMouseMove = (e) => {

const timeline = new TimelineLite();

    let position = {x:e.clientX,y:e.clientY}
    
      timeline.to('.follower', 0.2, {
        x: position.x-(-1),
        y: position.y-4,
        ease: 'power1.out'
      });

      timeline.to('.mouse', 0.2, {
        x: position.x-(-1),
        y: position.y-4,
        duration:.5,
        ease: 'power1.out'
      });
};

const onMouseDownCard = ()=>{
  gsap.to('.mouse', 0.2, {
    width:'30px',
    height:'30px',
    ease: 'power1.out',
    
  });
}

const onMouseExitCard = ()=>{
  gsap.to('.mouse', 0.2, {
    width:'60px',
    height:'60px',
    ease: 'power1.out',
    
  });
}

gsap.set(
  ".marquee__line > .char",
  { y: 100, opacity: 0, skewY: 70 },
);

const animatePr=()=>{
  gsap.to('.visible-pr > div',1, {
    y:-422,
    opacity:0,
    stagger:0.05,
    ease:Expo.easeInOut,
  });


  gsap.to(
    ".marquee__line > .char",
    {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.8,
      ease: Expo.easeInOut,
      skewY: 0,
    }
  );


}

const animatePrReverse=()=>{
  gsap.to('.visible-pr > div',1, {
    y:0,
    opacity:1,
    stagger:0.05,
    ease:Expo.easeInOut,
  });

  gsap.to(
    ".marquee__line > .char",
    { y: 100, opacity: 0, skewY: 70,stagger:0.05,
      ease:Expo.easeInOut, },
  );
  
}





document.addEventListener('mousemove', onMouseMove);

