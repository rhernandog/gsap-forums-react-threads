import React, { Component } from "react";
import { gsap } from "gsap";

import "./wheel-dynamic-styles.css";
// GSAP  Forums: https://greensock.com/forums/topic/24493-dynamic-animations-with-react-props-and-state/

class WheelDynamicStop extends Component {
  constructor() {
    super();
    this.state = {
      stopSpinAngle: null,
      stopSpin: false
    };
    this.spinTween = null;
    this.wheel = null;
    this.stopSpin = false;
    this.loopIteration = 0;
  }

  startSpinHandler = () => {
    this.setState({ stopSpin: false });
    this.loopIteration = 0;
    gsap.to(this.spinTween, {
      ease: "none",
      duration: 0.75,
      timeScale: 1
    });
  };

  stopSpinHandler = () => {
    this.setState({
      stopSpin: true,
      stopSpinAngle: 254
    });
  };

  componentDidMount() {
    this.spinTween = gsap.to(this.wheel, {
      rotation: 360,
      ease: "none",
      duration: .875,
      onRepeat: () => {
        const { stopSpin, stopSpinAngle } = this.state;
        if (this.loopIteration >= 5 && stopSpin) {
          gsap.to(this.spinTween, {
            ease: "power1.inOut",
            duration: 2 + (360 / stopSpinAngle),
            timeScale: 0
          });
        }
        this.loopIteration++;
      },
      repeat: -1,
      paused: true
    })
      .timeScale(0)
      .play();
  }

  render() {
    return <div className="row">
      <div className="col-12">
        <h1>QND PoC: Wheel of Fortune</h1>
        <ol>
          <li>Start- and stop with some momentum</li>
          <li>Spin wheel until requested to stop</li>
          <li>Stop at specific angle</li>
          <li>Spin a minimum amount of turns before stopping</li>
        </ol>
        <div className="spinner" ref={e => this.wheel = e}></div>
        <button onClick={this.startSpinHandler} className="btn btn-info" id="play">Play</button>
        <button onClick={this.stopSpinHandler} className="btn btn-info ml-3" id="stop">Stop at 254°</button>
      </div>
    </div>;
  }
}

export default WheelDynamicStop;
