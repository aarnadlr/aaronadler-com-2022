import React from 'react';
// import LottieControl from '../LottieControl'
import Lottie from 'lottie-react-web';
import ibm from './data-circle-diamond';

export default function CodeWindow() {
  return (
    <div className='codeRect'>
      {/* <LottieControl/> */}

      <Lottie
        options={{
          animationData: ibm,
          // loop: false,
        }}
        speed={0.6}
      />

      <style jsx>{`
        .codeRect {
          height: 207px;
          background: blue;
        }
      `}</style>
    </div>
  );
}
