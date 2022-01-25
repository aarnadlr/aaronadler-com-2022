import React from 'react';
import Lottie from 'react-lottie';
// import animationData from './CodeWindow.js/5_ibm-circle-diamond/assets/js/data-circle-diamond'

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }
  componentDidMount() {
    // Lottie.speed(0.3);
    // anim.setSpeed(.1);
  }

  render() {
    // const buttonStyle = {
    //   display: 'block',
    //   margin: '10px auto'
    // };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      // setSpeed: .1,
      // animationData: animationData,
      animationData: require('./CodeWindow.js/5_ibm-circle-diamond/assets/js/data-circle-diamond'),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          // width={400}
          // height={207}
          speed={2}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />

        {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button> */}
      </div>
    );
  }
}
