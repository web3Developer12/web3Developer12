import './Mouse.css'
import React, { useState, useEffect, useRef } from 'react';
import { TimelineLite } from 'gsap';

function Mouse(props) {
  
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef   = useRef(null);
    const followerRef = useRef(null);

  
    useEffect(() => {
      document.addEventListener('mousemove', onMouseMove);
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      };
    }, []);
  
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  
    const renderCursor = () => {
      const timeline = new TimelineLite();
      timeline.to(followerRef.current, 0.2, {
        x: position.x-(-1),
        y: position.y-11,
        ease: 'power1.out'
      });

      timeline.to(cursorRef.current, 0.2, {
        x: position.x-(-1),
        y: position.y-11,
        duration:.5,
        ease: 'power1.out'
      });

    };

    useEffect(()=>{
        renderCursor()
    },[position])

  return (
    <div >
      <div className="follower" ref={followerRef}></div>
      <div className="mouse" ref={cursorRef}></div>
    </div>
  );
};

export default Mouse;
