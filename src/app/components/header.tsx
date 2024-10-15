import Link from "next/link"
export default function Home() {
  return (
    <div className="container">
      <ul className="header-button">
      <Link href={"/"}><li className="home">Home</li></Link>
       <Link href={"/contact-me"}> <li >Contact Me</li></Link>
        <Link href={"/about-me"}><li className="About">About Me</li></Link>
      </ul >
      <h1 className="title ">Ifra Aslam </h1>
      <p className="description">
        Web Developer | JavaScript | React | Next.js | Node.js
      </p>
      </div>
  )
}
