import Head from 'next/head';
// import Image from 'next/image'
import { useEffect, useRef } from 'react';
// import styles from '@/pages/index.module.css'
import TopNav from '../Components/TopNav';
import WelcomeBio from '../Components/WelcomeBio';
import Cards from '../Components/Cards';
import CoreTools from '../Components/CoreTools';
import Footer from '../Components/Footer';
// import MediumCard from '../Components/MediumCard';
// import HackerrankScore from '../Components/hackerrank-score';
// import Link from 'next/link';
// import RSSRequestHOC from '../Components/HOCs/RSSRequestHOC'
// import Cookies from 'js-cookie';
// import {useRouter} from "next/router";


export default function Index() {

  // const { query } = useRouter();

  // useEffect(()=>{

  //   fetch(`/api/routeOne?${'key'}=${'value'}`, {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       token: '1234'
  //     })
  //   }).then((res) => res.json())
  //     .then((json) => console.log('json:', json));

  // },[query])

  return (
    <div>
      {console.log('aaronadler.com')}
      <Head>
        <title>Aaron Adler | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <TopNav />
      <WelcomeBio />

      {/* <div className="algos">
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
      </div> */}

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

// export async function getServerSideProps({ req, res }:{ req:{}, res:{} }) {
//   // const res = await fetch(`${server}/api/routeOne`)
//   // const data = await res.json()
//   // console.log('data:', data)

//   return {
//     props: { token: JSON.stringify(req?.cookies.token) }, // will be passed to the page component as props
//   };
// }
