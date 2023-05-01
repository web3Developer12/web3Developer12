import { useState,useEffect,useRef } from 'react'
import { motion, useScroll, useTransform} from 'framer-motion'
import './App.css'
import SmoothScroll from './SmoothScroll'
import gsap from 'gsap'
import Reveal from './components/Reveal'
import { useLayoutEffect } from 'react'
import { Expo } from 'gsap'
import Mouse from './components/Mouse'


function App() {


    const refApp = useRef()

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            var tl = gsap.timeline({smoothChildTiming:true})
            
            // ANIMATE ENTRY
            tl.to(".text", {ease:Expo.easeInOut,duration:2})
            tl.to(".texts > div", { x:-500,ease:Expo.easeInOut,stagger:0.05})
            tl.to(".texts", { y:-600,rotate:-90,scale:4.5,duration:2,ease:Expo.easeInOut})
            tl.to(".text", { opacity:1,fontWeight:300,ease:Expo.easeInOut})
            tl.to(".texts > div", { x:-7500,ease:Expo.easeInOut,stagger:0.05,})
            tl.to(".reveal-container", { y:870,ease:Expo.easeInOut,display:'none'})
            
            // ANIMATE HERO
            tl.to(".divider", { width:'100%',ease:Expo.easeInOut,duration:1,stagger:0.05});
            tl.fromTo(".ch > p",{ y:     100,opacity: 0,skewY:70},{y: 0,opacity: 1,stagger: 0.03,duration:.8,ease:Expo.easeInOut,skewY:0})
            tl.to(".captions > p", { y:0,ease:Expo.easeInOut,duration:.5,stagger:0.05})
            tl.fromTo('.card',{ y: 100,opacity: 0,skewY:-70},{y: 0,opacity: 1,stagger:0.005,duration:1,ease:Expo.easeInOut,skewY:0})
            tl.play()

        },refApp);
        
        return () => ctx.revert();

    }, []);


    return <div class='App' ref={refApp}>
        {<Reveal/>}
        <Mouse/>
        <div class='wrapper-main'>
            

            

           
        </div>

    </div>


}

export default App;