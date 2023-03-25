import { useState,useEffect,useRef } from 'react'
import {AnimatePresence, motion, useMotionValue, useScroll, useTransform,useMotionValueEvent} from 'framer-motion'
import './App.css'

function AnimateLetter(props) {
    
    return <motion.div style={{display:'flex',overflow:'hidden'}}>
        {
            [...props.text].map((el,index)=>{
                return <motion.p onMouseEnter={()=>{props.setVariantPointer('text')}} onMouseLeave={()=>{props.setVariantPointer('none')}} initial={{y:400}} animate={{y:0}} transition={{delay:index * 0.05,duration:1}} key={index}>
                    {el}
                </motion.p>
            })
        }
    </motion.div>
}

function App() {

    const targetRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [variantPointer, setVariantPointer] = useState('none');
    const [splash,setSplash] = useState(true)

    const {scrollYProgress} = useScroll()
    const x = useTransform(scrollYProgress,[1,-1],[0,-600])

    const ref = useRef(null);

    const scrollDiv = useScroll({
        target: ref,
    
    });

    const refTextProfile = useRef(null);
    
    const scrollTextProfile = useScroll({
        target: refTextProfile,
    
    });

    const YProfile = useTransform(scrollTextProfile.scrollYProgress, [0,12], [0,400])

    useEffect(() => {
        const updateCursorPosition = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", updateCursorPosition);

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    const variants = {
        none:{
            height:15,width:15
        },
        text: {
          height: 180,
          width: 180,
        }
    }


    const scale = useTransform(scrollYProgress, [0,1], [.2, 1])


    return <motion.div className='App'>

        <motion.div variants={variants} animate={variantPointer} className='cursor' style={{ left: cursorPosition.x, top: cursorPosition.y }}>

        </motion.div>
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

        <motion.div className='content'  >
            <motion.div  className='text-1'>
        
                <AnimateLetter text='BLOCKCHAIN' setVariantPointer = {setVariantPointer}/>

            </motion.div>

            <motion.div className='text-1' style={{display:'flex',justifyContent:'flex-end',marginTop:'2%'}} >
                <AnimateLetter text='DEVELOPER' setVariantPointer = {setVariantPointer} />
            </motion.div>

            <motion.div className='text-1' style={{marginTop:'2%'}}>
                <AnimateLetter text='& UX DESIGNER' setVariantPointer = {setVariantPointer}/>

            </motion.div>
        </motion.div>
        <motion.div style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        >
            <motion.svg viewBox="0 0 100 100" width="180" height="180"  animate={{ rotate: 360 }}
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

                    <motion.p style={{fontFamily:'NMACHINALIGHT'}}>"A small intro"</motion.p>
                    
                    <motion.div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                        <motion.div style={{width:'35%',textAlign:'justify',marginTop:'.2%',fontSize:'13px',lineHeight:'22px'}}>
                            <motion.p style={{fontFamily:'NMACHINALIGHT'}}>HEY, I'M A UI/UX DESIGNER AND WEB DEVELOPER. I LOVE BUILDING NICE EXPERIENCES FOR STARTUPS & AGENCIES.</motion.p>
                        </motion.div>

                        <motion.div style={{width:'35%',textAlign:'justify',marginTop:'2%',fontSize:'14px',lineHeight:'22px'}}>
                            <motion.p style={{fontFamily:'NMACHINALIGHT'}}>Self taught UX/UI designer with a passion to learn new skills and technologies. I am currently studying web development in Paris at "L'école multimedia". I have been building interfaces for startups since 2020.<br/><br/>
I help businesses leave a lasting impression in the digital world. With a touch of creativity and empathy, I specialize in crafting modern websites that offer user-centric experiences .</motion.p>
                        </motion.div>
                    </motion.div>

                </motion.div>

                <motion.div ref={ref} className='code-style' style={{padding:'6%',overflow:'hidden',background:'black',width:'100%',marginTop:'4%',scale,marginBottom:'5%'}}>
                    <motion.div style={{opacity:scrollDiv.scrollYProgress}} transition={{duration:1}}>
                        pragma solidity^0.8.17;<br/>external() returns(uint256){`...`}
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div>

        

    </motion.div>
}

export default App;
