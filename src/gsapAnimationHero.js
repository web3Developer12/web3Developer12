import gsap from "gsap";
import { Expo } from "gsap";

export function animateEntryTo() {
  gsap.to(".wrapper-ln", { 
    borderColor:'black',
    ease:Expo.easeInOut,
    delay:1,
    duration:1,
  });

gsap.to(".ch", { 
    y:0,
    ease:Expo.easeInOut,
    delay:1.2,
});

gsap.to(".nm", { 
    y:0,
    ease:Expo.easeInOut,
    delay:1.24,
});

gsap.to(".captions > p", { 
    y:0,
    ease:Expo.easeInOut,
    delay:1.4,
    duration:1.5,
    stagger:0.05
});

gsap.fromTo(
    '.ch > p',
    { 
      y: 100,
      opacity: 0,
      skewY:70
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration:1,
      delay:1,
      ease:Expo.easeInOut,
      skewY:0,
    }
  )

  gsap.fromTo(
    '.nm > p',
    { 
      y: 100,
      opacity: 0,
      skewY:70
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration:1,
      delay:1.6,
      ease:Expo.easeInOut,
      skewY:0,
    }
  )

  gsap.to(
    '.wrapper-ln-2',
    {
      borderColor:'black',
      duration:1,
      delay:1.6,
      ease:Expo.easeInOut,
      skewY:0,
    }
  )
  gsap.fromTo(
    '.wrapper-ln-2 .card',
    { 
      y: 100,
      opacity: 0,
      skewY:70
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration:1,
      delay:1.6,
      ease:Expo.easeInOut,
      skewY:0,
    }
  )

  gsap.fromTo(
    '.wrapper-ln-2 .card-2',
    { 
      y: 100,
      opacity: 0,
      skewY:70
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration:1,
      delay:1.6,
      ease:Expo.easeInOut,
      skewY:0,
    }
  )

  gsap.fromTo(
    '.wrapper-ln-2 .center-text > .char',
    { 
      y: 100,
      opacity: 0,
      skewY:50
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration:1,
      delay:1.8,
      ease:Expo.easeInOut,
      skewY:0,
    }
  )

  gsap.to(".wrapper-ln-3", { 
    borderColor:'black',
    ease:Expo.easeInOut,
    delay:1.9,
    duration:1,
});


}

export function animateEntrySet() {
   

    gsap.set(
        '.ch > p',
        { 
          y: 100,
          opacity: 0,
          skewY:70
        }
    )
    
      gsap.set(
        '.nm > p',
        { 
          y: 100,
          opacity: 0,
          skewY:70
        }
      )

      gsap.set(
        '.wrapper-ln-2 .card',
        { 
          y: 100,
          opacity: 0,
          skewY:70
        }
      )

      gsap.set(
        '.wrapper-ln-2 .card-2',
        { 
          y: 100,
          opacity: 0,
          skewY:70
        }
      )

      gsap.set(
        '.wrapper-ln-2 .center-text > .char',
        { 
          y: 100,
          opacity: 0,
          skewY:50
        }
      )

     

      
}
