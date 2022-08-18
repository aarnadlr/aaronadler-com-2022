import Image from 'next/image'

const Gif = ()=>{
  return(
    <div>
    <Image src="/static/giphy.gif" width='300' height="270" alt='gif' />
    <style jsx>{`
div{
  height: 100vh;
  background: black;
  display: grid;
  place-items: center;
}
`}</style>
    </div>
  )
}

export default Gif