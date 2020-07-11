import React, { Component, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// https://greensock.com/forums/topic/24766-update-react-state-with-oncomplete-and-repeat/

const UpdateState = () => {
  let testEl = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true, repeat: -1 }));
  const [count, setCount] = useState(0);

  useEffect(() => {
    tl.current
      .to(testEl.current, {
        duration: 2,
        opacity: 0,
        onComplete: update
      })
      .play();
  }, []);

  const update = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          <h3 className="text-center">Update React State with onComplete and repeat</h3>
          <h5>GSAP Forums <a href="https://greensock.com/forums/topic/24766-update-react-state-with-oncomplete-and-repeat/" target="_blank" rel="noopener noreferrer">
            https://greensock.com/forums/topic/24766-update-react-state-with-oncomplete-and-repeat/
          </a></h5>
        </div>
        <div className="col-12 pt-3">
          <p className="lead">Count: {count}</p>
          <button className="btn btn-info">Manual Update</button>
          <div className="alert alert-dark mt-3" ref={testEl}>
            THIS IS A TEST
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateState;
