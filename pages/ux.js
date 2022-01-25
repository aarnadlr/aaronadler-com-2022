// import { register, unregister } from 'next-offline/runtime';
import React from 'react';
import Head from 'next/head';
import TopNav from '../Components/TopNav';
import WelcomeBioUX from '../Components/WelcomeBioUX';
import CardsUX from '../Components/CardsUX';
import CoreTools from '../Components/CoreTools';
import Footer from '../Components/Footer';
// import MediumCard from '../Components/ZMediumCard';
// import HackerrankScore from '../Components/hackerrank-score';
// import Link from 'next/link';

// import RSSRequestHOC from '../Components/HOCs/RSSRequestHOC'

// console.log('aacom-5');

const UxPage = () => (
  <div>
    <Head>
      <title>Aaron Adler | UX Engineer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link href="https://fonts.googleapis.com/css?family=Lato:900" rel="stylesheet"></link> */}
      <link
        href="https://fonts.googleapis.com/css?family=Teko:300"
        rel="stylesheet"
      />
    </Head>
    {/* <RSSRequestHOC/> */}

    <TopNav />

    <WelcomeBioUX />

    <CardsUX />

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

export default UxPage;
