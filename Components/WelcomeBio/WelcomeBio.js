import React from 'react';
import Link from 'next/link';

// import styles from "./WelcomeBio.css";

// const Paragraph = styled.p`
//   font-weight:300;
// `

const WelcomeBio = () => (
  <main className="">
    <div id="topSection" className="flex flex-column center mt6 mb5">
      <img
        id="profile-pic"
        className="grow2 center mb3"
        src="../../static/icons/profile-pic.jpg"
        alt="alt"
      />
      <h1 className="f2c tc fw4">Aaron Adler</h1>

      {/* SOCIAL ICONS UNDER NAME */}
      <div className="flex justify-center mb4">
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
          href="https://codepen.io/aaronadler/"
        >
          <img
            alt="codepen"
            className="codepen icon grow-large-2 ml3"
            src="../../static/svg/codepen.svg"
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
        Hi there. &nbsp;I&#39;m a&nbsp;
        <span className="highlight">&nbsp;Front-end Software Developer&nbsp;</span>
        {/*&nbsp;and&nbsp;*/}
        {/*<span className="highlight">&nbsp;UX Engineer&nbsp;</span>*/}
        &nbsp;in NYC.&nbsp; I’ve worked on projects for Facebook, IBM, AppNexus,
        R/GA and others. &nbsp;My work has been recognized by Cannes, AICP, the
        Art Directors Club, and the New York Times. &nbsp;My focus is on
        {' '}
        <span className="highlight">&nbsp;JavaScript&nbsp;</span>
        &nbsp;,
        {' '}
        <span className="highlight">&nbsp;React&nbsp;</span>
        &nbsp;, and
        {' '}
        <span className="highlight">&nbsp;CSS&nbsp;</span>
        &nbsp;.&nbsp;&nbsp;

         <Link href="/ux">
          <a
            // target={'_blank'}
            className={'hoverLink'}
            // style={{ color: 'rgb(13, 2, 165)' }}
            // style={{ color: 'rgb(14, 0, 202)' }}
          >
            Tap here to view UX Design work.
          </a>
        </Link>
      </h2>


    </div>

    <style jsx>
      {`
        #topSection{
          max-width: 554px;
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
