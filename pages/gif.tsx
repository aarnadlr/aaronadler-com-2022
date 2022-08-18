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
        //mobile
        main {
          background: black;
          width: 100vw;
          height: 100vh;
          padding-top: 100px;
        }
        div {
          width: 70vw;
          display: block;
          margin: 0 auto;
        }

        //desktop
        @media screen and (min-width: 800px) {
          div {
            width: 40vw;
          }
        }
      `}</style>
    </main>
  );
};

export default Gif;
