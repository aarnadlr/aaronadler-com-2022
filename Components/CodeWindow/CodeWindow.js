import React from 'react';
// import LottieControl from '../LottieControl'
import Lottie from 'lottie-react-web';


export default function CodeWindow({name, bcgColor, animData, speed}) {
  return (
    <div className='codeRect'>
      {/* <LottieControl/> */}

      <Lottie
        options={{
          animationData: animData,
          // loop: false,
        }}
        speed={speed}
      />

      <style jsx>{`
        .codeRect {
          height: 215px;
          background: ${bcgColor};
        }
      `}</style>
    </div>
  );
}
