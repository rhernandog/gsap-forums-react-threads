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
    this.startAngle = 0;
    this.spinTween = null;
    this.wheel = null;
    this.stopSpin = false;
    this.loopIteration = 0;
  }

  startSpinHandler = () => {
    this.setState({ stopSpin: false });
    this.loopIteration = 0;
    this.createSpinAnimation();
    gsap.to(this.spinTween, {
      ease: "none",
      duration: 0.75,
      timeScale: 1
    });
  }

  stopSpinHandler = () => {
    this.setState({
      stopSpin: true,
      stopSpinAngle: 45
    });
  }

  createSpinAnimation = () => {
    if (this.wheel._gsap) {
      // this.startAngle = this.wheel._gsap.get(this.wheel, "rotation");
      console.log(parseFloat(this.wheel._gsap.get(this.wheel, "rotation").replace("deg", "")));
      this.startAngle = parseFloat(this.wheel._gsap.get(this.wheel, "rotation").replace("deg", ""));
    }
    this.spinTween = gsap.to(this.wheel, {
      overwrite: "true",
      rotation: 360 + this.startAngle,
      repeat: -1,
      duration: 0.875,
      ease: "none",
      onRepeat: () => {
        const { stopSpin, stopSpinAngle } = this.state;
        if (this.loopIteration >= 2 && stopSpin) {
          gsap.to(this.spinTween, {
            ease: "power1.inOut",
            duration: 1.75 + (0.875 * stopSpinAngle / 360),
            timeScale: 0
          });
        }
        this.loopIteration++;
      },
    })
      .timeScale(0)
      .play(0);
    //   this.spinTween = gsap.to(this.wheel, {
    //     rotation: 360,
    //     ease: "none",
    //     duration: .875,
    // onRepeat: () => {
    //   const { stopSpin, stopSpinAngle } = this.state;
    //   if (this.loopIteration >= 2 && stopSpin) {
    //     gsap.to(this.spinTween, {
    //       ease: "power1.inOut",
    //       duration: 1.75 + (0.875 * stopSpinAngle / 360),
    //       timeScale: 0
    //     });
    //   }
    //   this.loopIteration++;
    // },
    //     repeat: -1,
    //     paused: true
    //   })
    //     .timeScale(0)
    //     .play();
  }

  componentDidMount() {
    this.createSpinAnimation();
    // this.spinTween = gsap.to(this.wheel, {
    //   rotation: 360,
    //   ease: "none",
    //   duration: .875,
    //   onRepeat: () => {
    //     const { stopSpin, stopSpinAngle } = this.state;
    //     if (this.loopIteration >= 2 && stopSpin) {
    //       gsap.to(this.spinTween, {
    //         ease: "power1.inOut",
    //         duration: 1.75 + (0.875 * stopSpinAngle / 360),
    //         timeScale: 0
    //       });
    //     }
    //     this.loopIteration++;
    //   },
    //   repeat: -1,
    //   paused: true
    // })
    //   .timeScale(0)
    //   .play();
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
        <div className="spinner" ref={e => this.wheel = e}>
          <div className="line"></div>
        </div>
        <button onClick={this.startSpinHandler} className="btn btn-info" id="play">Play</button>
        <button onClick={this.stopSpinHandler} className="btn btn-info ml-3" id="stop">Stop at 254°</button>
      </div>
    </div>;
  }
}

export default WheelDynamicStop;
