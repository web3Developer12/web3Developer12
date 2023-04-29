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


    return <div className='App' ref={refApp}>
        {<Reveal/>}
        <Mouse/>
        <div className='wrapper-main'>
            <div className='wrapper-hero'>

                <div className='wrapper-container'>

                        <div className='wrapper-ln'>
                                <motion.div className='ch'>
                                    <p className='char'>CHR</p>
                                    <p className='char'>I</p>
                                    <p className='char'>S</p>
                                    <p className='char'>T</p>
                                    <p className='char' style={{marginRight:'1%'}}><i>O </i></p>
                                    <p className='char'>P</p>
                                    <p className='char'>H</p>
                                    <p className='char'>E</p>
                                    <p className='char'>R</p>
                                </motion.div>
                                <div></div>
                                <motion.div className='ch'>
                                    <p className='char'>RU</p>
                                    <p className='char'>U</p>
                                    <p className='char'>D</p>
                                    <p className='char'>.</p>
                                    <p className='char'><i>S</i></p>
                                </motion.div>
                        </div>
                        <div className='divider'></div>
                        <div className='captions'>
                            <motion.p initial={{y:500}}>BLOCKCHAIN DEVELOPER</motion.p>
                            <motion.p initial={{y:500}}>SOFTWARE DEVELOPER</motion.p>
                            <motion.p initial={{y:500}}>Email</motion.p>
                            <motion.p initial={{y:500}}>United States - Orlando</motion.p>
                        </div>

                        <div className='wrapper-ln-2 border'>
                            <div className='card'>About</div>

                            <div className='center-text ch'>
                                <p className='char'>T</p>
                                <p className='char'>A</p>
                                <p className='char'>L</p>
                                <p className='char'>E</p>
                                <p className='char'>N</p>
                                <p className='char'>TED</p>

                            </div>

                            <div className='card card-2'>Projects</div>
                        </div>

                        <div className='divider'></div>


                        <div className='wrapper-ln-3'>
                            
                            <div className='ch'>
                                <p className='char'>W</p>
                                <p className='char'>E</p>
                                <p className='char'>B</p>
                                <p className='char'>3</p>
                            </div>

                            <div className='ch'>
                                <p className='char'>D</p>
                                <p className='char'>E</p>
                                <p className='char'>V</p>
                                <p className='char'>E</p>
                                <p className='char'>L</p>
                                <p className='char'>O</p>
                                <p className='char'>P</p>
                                <p className='char'>E</p>
                                <p className='char'>R</p>
                            </div>

                        </div>

                        <div className='divider'></div>


                        <div className='wrapper-ln-4'>
                            <div className='ch'>
                                <p className='char'>B</p>
                                <p className='char'>A</p>
                                <p className='char'>S</p>
                                <p className='char'>E</p>
                                <p className='char'>D</p>
                            </div>
                            <div className='card' style={{backgroundColor:'#263a29',color:'white'}}>Linkedin</div>
                            <div className='ch'>
                                <p className='char'>I</p>
                                <p className='char'>N</p>
                                <p className='char'>.</p>
                                <p className='char'>O</p>
                                <p className='char'>*</p>
                                <p className='char'>L</p>
                                <p className='char'>*</p>
                                <p className='char'>N</p>
                                <p className='char'>*</p>
                                <p className='char'>*</p>

                            </div>
                        </div>
                        <div className='divider'></div>

                    </div>
            </div>

            <div className='about'>
                <p className='about-intro'>I <i>strive</i> to create<br/>websites <br/>with a <i>great</i><br/>attention</p>
                <div className='about-txt'>
                        <p>As a developer, I am passionate about creating innovative solutions to complex problems. With expertise in web2 & web3 & game & app development and ethical hacking.<br/><br/>I am committed to delivering high-quality code that is efficient, scalable, and easy to maintain.</p>
                        <br/>

                        <div className='about-skills'>
                        
                            <div>
                                <p>Html/Css/Javascript</p>
                                <p>2023</p>
                                <p>2023</p>
                            </div>

                            <div>
                                <p>React js/Node js</p>
                                <p>2023</p>
                                <p>2023</p>
                            </div>

                            <div>
                                <p>Framer Motion/Gsap</p>
                                <p>2023</p>
                                <p>2023</p>
                            </div>

                            <div>
                                <p>Solidity/Yul</p>
                                <p>2023</p>
                                <p>2023</p>
                            </div>

                            <div>
                                <p>Ethereum/Layer-2</p>
                                <p>2023</p>
                                <p>2023</p>
                            </div>

                            <div>
                                <p>Python</p>
                                <p>2023</p>
                                <p>2023</p>
                            </div>

                            <div>
                                <p>C/C#</p>
                                <p>2023</p>
                                <p>2023</p>
                            </div>


                        </div>
                </div>

                
            </div>

            <div className='projects'>
                <div className='tl'>Selected</div>
                <div className='tl'>Projects</div>
                <div className='tl'>(2018-Today)</div>

                <div className='projects-items'>
                    <div className='pr-1'>

                        <div className='header'>
                            <p>Decentralized Gmail</p>
                            <p>2023</p>
                        </div>

                        <div className='bottom'>
                            <p>Ethereum</p>
                            <p>01</p>
                        </div>

                    </div>
                    <div className='pr-2'>

                    <div className='header'>
                            <p>Decentralized Gmail</p>
                            <p>2023</p>
                        </div>

                        <div className='bottom'>
                            <p>Ethereum</p>
                            <p>01</p>
                        </div>
                    </div>

                    <div className='pr-3'>

                        <div className='header'>
                                <p>Decentralized Gmail</p>
                                <p>2023</p>
                            </div>

                            <div className='pr-bottom'>
                                <p>Ethereum</p>
                                <p>01</p>
                            </div>
                    </div>

                    <div className='pr-1'>

<div className='header'>
<p>Decentralized Gmail</p>
<p>2023</p>
</div>

<div className='bottom'>
<p>Ethereum</p>
<p>01</p>
</div>

</div>

                </div>
            </div>
        </div>

    </div>


}

export default App;
