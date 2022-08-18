import Image from 'next/image';

const Gif = () => {
  return (
    <main>
      <div>
        <Image
          layout="responsive"
          src="/static/giphy.gif"
          width="600"
          height="500"
          alt="gif"
        />
        
      </div>
      <style jsx>{`
          //mobile

          main{
            background: black;
            width: 100vw;
            height: 100vh;
            padding-top: 100px;
          }
          div {
            
            width: 70vw;
            background: black;
            display: block;
            margin: 0 auto;
          }
        `}</style>
    </main>
  );
};

export default Gif;
