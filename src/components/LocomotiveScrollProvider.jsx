'use client';
import React, { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let locomotiveScroll;

    import('locomotive-scroll').then((LocomotiveScrollModule) => {
      locomotiveScroll = new LocomotiveScrollModule.default({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
      });
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
