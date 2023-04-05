import gsap from "gsap";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";


export default function useLocoScroll(start) {
  
    useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.getElementById('sc-container')
    console.loh(scrollEl)

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 3,
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, [start]);
}