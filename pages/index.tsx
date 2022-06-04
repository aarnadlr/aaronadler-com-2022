import React from "react";
import Head from 'next/head';
// import Image from 'next/image'

// import styles from '@/pages/index.module.css'
import TopNav from '../Components/TopNav';
import WelcomeBio from '../Components/WelcomeBio';
import Cards from '../Components/Cards';
import CoreTools from '../Components/CoreTools';
import Footer from '../Components/Footer';
import HackerrankScore from '../Components/hackerrank-score';
// import RSSRequestHOC from '../Components/HOCs/RSSRequestHOC'
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import useDarkMode from 'use-dark-mode';

export default function Index() {
  const darkMode = useDarkMode(false);

  const [isDarkMode, setIsDarkMode] = React.useState(false);


  return (
    
      <div>
        {/* {console.log('updated 1/25/22')} */}
        <Head>
          <title>Aaron Adler | Frontend Engineer</title>
        </Head>
      {/* <RSSRequestHOC/> */}
      
      {/* <DarkModeToggle 
      onChange={setIsDarkMode} //func
      isDarkMode={isDarkMode} 
      size={85} 
      /> */}
      
      <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>

        <TopNav />

        <WelcomeBio />

        <div className="algos">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.codewars.com/users/aarnadlr"
          >
            <img
              src="https://www.codewars.com/users/aarnadlr/badges/large"
              alt=""
            />
          </a>

          <HackerrankScore />
        </div>

        <Cards />

        {/* <MediumCard/> */}

        <CoreTools />

        <Footer />

        <style jsx>
          {`
            .algos {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .algos a {
              transition: all 0.3s ease;
              margin: 0 0 40px 0;
            }
            .algos a:hover {
              transform: translateY(-3px);
            }

            .algos a img {
              cursor: pointer;
              display: block;
            }
          `}
        </style>
      </div>
  );
}
