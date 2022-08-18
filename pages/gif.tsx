import Image from 'next/image';

const Gif = () => {
  return (
    <main>
      <div>
        <Image
          priority
          layout="responsive"
          src="/static/giphy.gif"
          width="600"
          height="500"
          alt="gif"
        />
      </div>
      <style jsx>{`
        main {
          background: black;
          width: 100vw;
          height: 100vh;
          padding-top: 100px;
        }
        div {
          display: block;
          margin: 0 auto;
        }
        /* PHONE Portrait */
        @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
          div {
            width: 70vw;
          }
        }

        /* DESKTOP Portrait */
        @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
          div {
            width: 40vw;
          }
        }
      `}</style>
    </main>
  );
};

export default Gif;
