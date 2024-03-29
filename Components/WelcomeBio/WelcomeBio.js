import React from 'react';
import Link from 'next/link';

// import styles from "./WelcomeBio.css";

// const Paragraph = styled.p`
//   font-weight:300;
// `

const WelcomeBio = () => (
  <main className="main">
    <div id="topSection_dev" className="flex flex-column center mt6">

      <div className="profile-wrapper relative flex flex-column center ">

        <img
          id="profile-pic"
          className="grow2 center mb3"
          src="../../static/icons/profile-pic.jpg"
          alt="alt"
          />

        {/* ROLE BADGE */}
        <Link href="/ux">
        <div id='badge_dev'>
          DEV
        </div>
        </Link>

      </div>

      <h1 className="f2c tc fw4 mb2 mt2">Aaron Adler</h1>
      <p className="email center mt0 mb4">
          aaron.adler [@] gmail [.com]
      </p>
      

      {/* SOCIAL ICONS UNDER NAME */}
      <div className="flex justify-center mb5 logo-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/aarnadlr"
        >
          <img
            alt="github"
            className="github icon grow-large-2"
            src="../../static/svg/github.svg"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/aaronadler/"
        >
          <img
            alt="linkedin"
            className="icon grow-large-2 ml3"
            src="../../static/icons/linkedin.png"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepen.io/aaronadler/"
        >
          <img
            alt="codepen"
            className="codepen icon grow-large-2 ml3"
            src="../../static/svg/codepen.svg"
          />
        </a>

       
        {/* <a target='_blank' rel="noopener noreferrer" href="https://www.toptal.com/designers/resume/aaron-adler"><img alt='toptal' className='icon grow-large-2 ml3' src='../../static/icons/toptal.gif' /></a> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/aarnadlr"
        >
          <img
            alt="dribbb"
            className="icon grow-large-2 ml3"
            src="../../static/icons/AA-dribbble-icon.png"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.producthunt.com/@aarnadlr"
        >
          <img
            className="icon grow-large-2 ml3"
            src="../../static/icons/prodhunt.png"
            alt="img"
          />
        </a>
        {/* <a target='_blank' rel="noopener noreferrer" href="https://workingnotworking.com/aarn"><img                     className='icon grow-large-2 ml3' src='../../static/icons/wnw.png' /></a> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@aaronadler"
        >
          <img
            alt="medium"
            className="icon grow-large-2 ml3"
            src="../../static/icons/medium.png"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/aaronadler"
        >
          <img
            className="icon grow-large-2 ml3"
            src="../../static/icons/twitter.png"
            alt="icon"
          />
        </a>
      </div>



      <h2 className="paragraph f5 lh-copy4b mh3 fw5">
        Hi there. &nbsp;I&#39;m a&nbsp;&nbsp;
        <span className="highlight">&nbsp;&nbsp;Front-end Software Engineer&nbsp;&nbsp;</span>
        {/*&nbsp;and&nbsp;*/}
        {/*<span className="highlight">&nbsp;UX Engineer&nbsp;</span>*/}
        &nbsp;&nbsp;in NYC.&nbsp; I’ve worked on projects for Facebook, LinkedIn, IBM and others. &nbsp;My work has been recognized by Cannes, AICP, the
        Art Directors Club, and the New York Times. &nbsp;My focus is on
        {' '}
        <span className="highlight">&nbsp;&nbsp;TypeScript / JavaScript&nbsp;&nbsp;</span>
        &nbsp;,
        {' '}
        <span className="highlight">&nbsp;&nbsp;React&nbsp;&nbsp;</span>
        &nbsp;,
        {' '}
        <span className="highlight">&nbsp;&nbsp;Svelte&nbsp;&nbsp;</span>
        &nbsp;, and
        {' '}
        <span className="highlight">&nbsp;&nbsp;CSS&nbsp;&nbsp;</span>
        &nbsp;.&nbsp;&nbsp;

         <Link href="/ux" className={'hoverLink'}>
          
            Tap here to view UX Design work.
          
        </Link>

      </h2>


    </div>

    <style jsx>
      {`
        .main {
          margin-bottom: 80px;
        }

        .icon {
          width: 20px;
          height: 20px;
          border-radius: 3px;
        }
      `}
    </style>
  </main>
);

export default WelcomeBio;
