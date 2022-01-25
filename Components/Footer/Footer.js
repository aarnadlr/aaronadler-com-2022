// import React from 'react';
// import './Footer.css';
// import '../../src/css/entry.css';

const Footer = () => (
  <footer className="center">
    {/* <!-- THANK YOU --> */}
    <div id="contact" className="container container--martop70">
      <p className='f3'>Thank You</p>
    </div>

    {/* <!-- CONTACT / EMAIL --> */}
    <div id="email" className="container container--marbot80 container--pad10">
      <a rel="noopener noreferrer" href="mailto:aaron.adler@gmail.com">
        <p className="grow f5">
          <i className="fa fa-envelope-o mr2" aria-hidden="true"></i>{' '}
          aaron.adler(at)gmail(.com)
        </p>
      </a>
    </div>

    <div className='f7 flex justify-center pt5 pb5'>
      <p className='w-70 tc lh-copy2'>
        Site built with <span className='teal6'>NextJS, React, Sass</span>
        .
      </p>
    </div>

    <style jsx>{`
      footer {
        letter-spacing: 0.08rem;
        text-align: center;
      }

      /* .container p {
      font-size: 1.15rem;
      line-height: 2.9rem
    } */
      .container--parag {
        max-width: 478px;
        margin: auto;
      }
      .container--contact {
        max-width: 300px;
        margin: auto;
      }
      .container--left {
        -ms-flex-pack: start;
        justify-content: flex-start;
      }
      .container--marbot30 {
        margin-bottom: 30px;
      }
      .container--marginbot40 {
        margin-bottom: 40px;
      }
      .container--marbot10 {
        margin-bottom: 10px;
      }
      .container--marbot20 {
        margin-bottom: 20px;
      }
      .container--marbot60 {
        margin-bottom: 60px;
      }
      .container--marbot80 {
        margin-bottom: 80px;
      }
      .container--martop20 {
        margin-top: 20px;
      }
      .container--martop30 {
        margin-top: 30px;
      }
      .container--martop40 {
        margin-top: 40px;
      }
      .container--martop50 {
        margin-top: 50px;
      }
      .container--martop70 {
        margin-top: 70px;
      }
      .container--pad10 {
        padding: 10px 0;
      }
      #email {
        margin-bottom: 0;
      }
    `}</style>
  </footer>
);

export default Footer;
