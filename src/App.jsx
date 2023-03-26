import { useState,useEffect,useRef } from 'react'
import {AnimatePresence, motion, useMotionValue, useScroll, useTransform,useInView} from 'framer-motion'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function AnimateLetter(props) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return <motion.div style={{display:'flex',overflow:'hidden'}} ref={ref}>
        {
            [...props.text].map((el,index)=>{
                return <motion.p  initial={{y:400}} animate={isInView ?{y:0}:{y:400}} transition={{delay:index * 0.05,duration:1}} key={index}>
                    {el}
                </motion.p>
            })
        }
    </motion.div>
}

function AnimateLetterInViewHidden(props) {

    const ref = useRef(null)
    const isInView = useInView(ref)

    return <motion.div style={{display:"flex",overflow:'hidden',...props.style}} ref={ref}>
        {
            [...props.text].map((el,index)=>{
                return <motion.p  initial={{y:400}} animate={isInView ?{y:0} :{y:400}} transition={{delay:index * 0.05,duration:1}} key={index}>
                    {el}
                </motion.p>
            })
        }
    </motion.div>
}

function ScrollTextOpacity(props) {

    const ref = useRef(null);

    const scroll = useScroll({
        target: ref,

    });

    const val = useTransform(scroll.scrollYProgress, props.start, props.end)

    return <motion.p ref={ref} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} style={{...props.style,opacity:val}}>{props.children}</motion.p>
}

function App() {


    const containerRef = useRef(null)
    const targetRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [variantPointer, setVariantPointer] = useState('none');
    const [splash,setSplash] = useState(true)

    const {scrollYProgress} = useScroll()
    const x = useTransform(scrollYProgress,[1,-1],[0,-600])

    //scale code
    const ref = useRef(null);

    const scrollDiv = useScroll({
        target: ref,

    });

    const scale = useTransform(scrollYProgress, [0,1], [.9, 1])


    const refTextProfile = useRef(null);

    const scrollTextProfile = useScroll({
        target: refTextProfile,

    });

    const YProfile = useTransform(scrollTextProfile.scrollYProgress, [0,12], [0,400])

    const updateCursorPosition = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        
        window.addEventListener("mousemove", updateCursorPosition);

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
        };
    });

    const variants = {
        none:{
          height: 180,
          width : 180,
          x     : cursorPosition.x - (180/2),
          y     : cursorPosition.y - (180/2)
        },
        text:{
          height: 180,
          width : 180,
          x     : cursorPosition.x - (180/2),
          y     : cursorPosition.y - (180/2)
        },
    }

    return <LocomotiveScrollProvider options={{smooth: true}} watch={[]} data-scroll-container>

            <div  ref={containerRef} className='App'>
            <motion.div variants={variants} animate={variantPointer} className='cursor'></motion.div>
                { splash &&
                <motion.div className='splash' style={{position:"fixed",zIndex:9999999999,width:"100%",height:"100%"}}>

                    {
                        [.5,.3,.2,.1].map((el,index)=>{
                            return <motion.div
                            style      = {{backgroundColor:"black",height:"25%"}}
                            initial    = {{width:"100%"}}
                            animate    = {{width:"0%"}}
                            transition = {{delay:el}}
                            key        = {index}
                            onAnimationComplete = {()=>{
                                if(el == .1){
                                    setTimeout(()=>{
                                        setSplash(false)
                                    },1000)
                                }
                            }}
                        ></motion.div>
                        })
                    }

                </motion.div>
                }

                <motion.div className='navbar'>
                <motion.p className='REGULARMACHINA title' onMouseEnter={()=>{setVariantPointer('text')}} onMouseLeave={()=>{setVariantPointer('none')}}>
                    RCS | web3
                </motion.p>
                <motion.ul>
                    <motion.li>ABOUT</motion.li>
                    <motion.li>PROJECTS</motion.li>
                    <motion.li>FAQ</motion.li>
                    <motion.li>CONTACT</motion.li>
                </motion.ul>
                </motion.div>

                <motion.div className='content' >

                    <motion.div  className='text-1'  onMouseEnter={()=>{setVariantPointer('text')}} onMouseLeave={()=>{setVariantPointer('none')}}>
                        <AnimateLetter text='BLOCKCHAIN'  setVariantPointer = {setVariantPointer}/>
                    </motion.div>

                    <motion.div   className='text-1' style={{display:'flex',justifyContent:'flex-end',marginTop:'2%'}} >
                        <AnimateLetter text='DEVELOPER'    setVariantPointer = {setVariantPointer} />
                    </motion.div>

                    <motion.div className='text-1' style={{marginTop:'2%'}}>
                        <AnimateLetter text='& UX DESIGNER' setVariantPointer = {setVariantPointer}/>

                    </motion.div>
                </motion.div>

                <motion.div style={{display:'flex',alignItems:'center',justifyContent:'center'}}

                >
                    <motion.svg  viewBox="0 0 100 100" width="180" height="180"  animate={{ rotate: 360 }}
                        transition={{ ease: "linear", duration:5, repeat: Infinity }}>
                        <defs>
                            <path id="circle"
                            d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text fontSize="16" fontFamily='NMACHINAREGULAR'>
                            <textPath xlinkHref="#circle">
                            ETHEREUM * BLOCKCHAIN * DEV
                            </textPath>
                        </text>
                    </motion.svg>
                </motion.div>


                <motion.div className='hero-1' >

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className='ABOUT-TXT'
                    >
                        <motion.p style={{x}}>ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT - ABOUT</motion.p>
                    </motion.div>

                    <motion.div >

                        <motion.div style={{marginInline:'8%'}}>

                            <motion.div style={{overflow:'hidden',marginTop:'8%',marginBottom:'2%'}}>
                                <motion.p ref={refTextProfile} style={{fontFamily:'NMACHINALIGHT',fontSize:44,y:YProfile}}>PROFILE</motion.p>
                            </motion.div>

                            <motion.div  style={{overflow:'hidden'}}>

                                <ScrollTextOpacity
                                    onMouseEnter={()=>{setVariantPointer('text')}}
                                    onMouseLeave={()=>{setVariantPointer('none')}}
                                    style={{fontFamily:'NMACHINALIGHT'}}
                                    start = {[0,1]} end = {[1,0]}
                                >
                                    "A small intro"1
                                </ScrollTextOpacity>

                            </motion.div>

                            <motion.div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                                <motion.div style={{width:'35%',textAlign:'justify',marginTop:'.2%',fontSize:'13px',lineHeight:'22px'}}>

                                    <ScrollTextOpacity style={{fontFamily:'NMACHINALIGHT'}} start = {[0,1]} end = {[1,0]}>HEY, I'M A UI/UX DESIGNER AND WEB DEVELOPER. I LOVE BUILDING NICE EXPERIENCES FOR STARTUPS & AGENCIES.</ScrollTextOpacity>
                                </motion.div>

                                <motion.div style={{width:'35%',textAlign:'justify',marginTop:'2%',fontSize:'14px',lineHeight:'22px'}}>
                                    <ScrollTextOpacity start = {[0,1]} end = {[1,0]} style={{fontFamily:'NMACHINALIGHT'}}>Self taught UX/UI designer with a passion to learn new skills and technologies. I am currently studying web development in Paris at "L'école multimedia". I have been building interfaces for startups since 2020.<br/><br/>
        I help businesses leave a lasting impression in the digital world. With a touch of creativity and empathy, I specialize in crafting modern websites that offer user-centric experiences .</ScrollTextOpacity>
                                </motion.div>
                            </motion.div>

                        </motion.div>

                        <motion.div ref={ref} className='code-style' style={{padding:'6%',overflow:'hidden',background:'black',width:'100%',marginTop:'2%',scale,marginBottom:'5%'}}>
                            <motion.div style={{opacity:scrollDiv.scrollYProgress}} transition={{duration:1}}>
                                pragma solidity^0.8.17;<br/>external() returns(uint256){`...`}
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </motion.div>



                <motion.div className='hero-2' >

                    <motion.div>
                        <motion.div  className='text-1'  onMouseEnter={()=>{setVariantPointer('text')}} onMouseLeave={()=>{setVariantPointer('none')}}>
                            <AnimateLetter text='SKILLS'  setVariantPointer = {setVariantPointer}/>
                        </motion.div>

                        <motion.div   className='text-1' style={{display:'flex',justifyContent:'flex-end'}} >
                            <AnimateLetter text='&TOOLS' setVariantPointer = {setVariantPointer} />
                        </motion.div>
                    </motion.div>

                    <motion.div className='skills'>

                        <motion.div className='ceil-sk-1'>

                            <motion.div style={{overflow:'hidden'}}>
                                <AnimateLetterInViewHidden text="SKILLS" style={{fontSize:'53px',fontFamily:'NMACHINAREGULAR'}}/>
                            </motion.div>

                            <motion.p initial={{opacity:0}} animate={{opacity:1}}>
                                Lorem ipsum dolor citraem dolarea ditraem dorea ditras tomati dilo que trae no citro darem koiraiyuri toku no deba tie.
                            </motion.p>

                        </motion.div>

                        <motion.div className='ceil-sk-2'>
                            <motion.ul>
                                {
                                    [
                                    "HTML","CSS","JAVASCRIPT","REACT","REDUX","FRAMER-MOTION","NODE JS","HARDHAT",
                                    "BLOCKCHAIN","ETHEREUM","POLYGON","AVALANCE","LAYER-1","LAYER-2","DEFI"
                                    ]
                                    .map((e,index)=>{
                                        return <motion.li key={index} initial={{x:234,opacity:0}} whileInView={{x:0,opacity:1}} transition={{
                                            delay:.2,duration:.5
                                        }}>
                                            {e}
                                        </motion.li>
                                    })
                                }
                            </motion.ul>
                        </motion.div>
                    </motion.div>

                </motion.div>

            </div>
        </LocomotiveScrollProvider>



}

export default App;
