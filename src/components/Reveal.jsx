import './Reveal.css'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { Expo } from 'gsap'
import { motion } from 'framer-motion'

export default function Reveal(){

    const ref = useRef(null)

    /*useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            gsap.to(".text", { 
                ease:Expo.easeInOut,
                delay:1,
                duration:2
            });


            gsap.to(".texts > div", { 
                x:-500,
                ease:Expo.easeInOut,
                delay:2,
                stagger:0.05
            });

            gsap.to(".texts", { 
                y:-600,
                rotate:-90,
                transform: 'perspective(122px) scale(4.1)',

                ease:Expo.easeInOut,
                delay:3,
            });

            
            gsap.to(".text", { 
                opacity:1,
                fontWeight:300,
                ease:Expo.easeInOut,
                delay:4,

            });

            gsap.to(".texts > div", { 
                x:-3500,
                ease:Expo.easeInOut,
                delay:5,
                stagger:0.05,
            });
            

        },ref);
        
        
        return () => ctx.revert();
    }, []);*/


    return <motion.div className="reveal-container">
            <div className='texts'>

                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>

                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.589 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.689 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.889 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>

                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
                <div className='text'>
                    <p >PRAGMA SOLIDITY ^0.789 FUNCTION EXTERNAL RETURNS UINT256 ASSEMBLY LET X:= 34 KECCAK256 BYTES32</p>
                </div>
            </div>
        </motion.div>
}