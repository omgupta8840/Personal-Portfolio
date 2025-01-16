import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import HeroPic from '../assets/Om.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
      <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>I'm</p>
        <h1 className='text-6xl'>Om Gupta</h1>
        <hr />
        <p className=' mt-10 text-slate-300 font-sans'>I am a Bachelor of Technology (B.Tech) student at the National Institute of Technology (NIT) Srinagar, pursuing a degree in Information Technology. Currently, I am in my 5th semester with a CGPA of 7.97 up to this point.</p>
      </div>
      <div className='lg:w-1/3 items-center ssm:w-fit'>
        <img src={HeroPic} alt="" width={250} height={250} className='rounded-full w-full  border-8 border-white' />
      </div>

      <div className='w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-4'>About Me</p>
        <p className='text-slate-300'>
          Let's build qualtiy in programming and explore New tools and Techniques.
        </p>
        <Link to='/about'>
        <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
          Show More...
        </button>
        </Link >

        <div className="flex mt-5 space-x-5 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/om-gupta-319a86282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </a>
          <a
            href="https://github.com/omgupta8840"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
