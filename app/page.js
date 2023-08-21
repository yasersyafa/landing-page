'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BiSun } from 'react-icons/bi'
import { RiTeamFill } from 'react-icons/ri'
import { FaBookReader } from 'react-icons/fa'

import { BsInstagram, BsSpotify, BsLinkedin, BsPersonWorkspace, BsCodeSquare } from 'react-icons/bs'


import Link from 'next/link'

export default function Home() {
  
  return (
    <div className='px-5 md:px-10 w-full'>
      <div className='pb-36 border-b md:pt-20' id='home'>
      <section className='w-full md:fixed top-0 left-0 flex justify-between md:px-10 md:shadow-xl md:bg-[#0000004b] z-10 py-5 items-center'>
        <Link href='/' className='text-md md:text-xl font-bold'>yasersyafaa</Link>
        <div className='hidden md:flex justify-end items-center gap-20'>
          <Link href='#home'>Home</Link>
          <Link href='#about'>About</Link>
          <Link href='#experience'>Experience</Link>
          <Link href='#gallery'>Gallery</Link>
        </div>
      </section>

      {/* hero section */}
      <section className='mt-10 md:mt-36 text-center flex flex-col gap-5'>
        <motion.h5 initial={{opacity: 0, y:-5}} animate={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.1}} className='text-base md:text-xl'>Hello everyone! I am</motion.h5>
        <motion.h1 initial={{opacity: 0, y:-5}} animate={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.2}} className='text-3xl md:text-6xl font-bold md:before:content-["Muhammad"] md:after:content-["Al-Machdi"]'> Yaser Syafa </motion.h1>
        <motion.p initial={{opacity: 0, y:-5}} animate={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.3}} className='text-sm md:text-lg'>an enthusiastic person in technology</motion.p>
        
      </section>

      {/* image and social media */}
      <motion.section initial={{opacity: 0, y:-5}} animate={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.5}} className='flex justify-around items-end mt-20'>
        <Image src='/img/profile.jpg' width={400} height={100} alt='me.png' className='rounded-t-full z-0 shadow-lg shadow-red-300 border p-4 dark:shadow-[#68242aa0]' />
      </motion.section>
      </div>


      {/* about me section */}
      <section className='mt-10 md:pt-36 pb-10 md:pb-36 border-b pt-5' id='about'>
        <div className='pt-5'>
          <h1 className='text-center font-bold text-3xl md:text-6xl'>About Me</h1>
          <div className='flex flex-col md:flex-row justify-center  items-center gap-10 md:gap-[100px] mt-20'>
            <Image src='/img/me.png' width={300} height={200} alt='profile.jpg' className='rounded-[40px] border p-4 dark:border-[#68242a] dark:border-2 dark:p-0' />
            <div className='max-w-[500px]'>
              <p className='text-base md:text-xl mx-auto'>Muhammad Yaser Syafa Al-Machdi, a fresh graduate from SMK Negeri 1 Jakarta, specializing in Software Engineering to develop responsive and dynamic web applications.</p>
              <p className='text-base md:text-xl mx-auto mt-5'>Currently, I am thrilled to embark on a new chapter as part of Politeknik Elektronika Negeri Surabaya (PENS) or Electronic Engineering Polytechnic Institute of Surabaya (EEPIS), where I am pursuing a degree in Game Technology.</p>
              <div className='flex justify-start items-center gap-3 mt-5'>
                <div className='border rounded-full p-3 cursor-pointer'>
                  <a href="https://www.linkedin.com/in/yaser-syafa" target="_blank"><BsLinkedin size={20} /></a>
                </div>

                <div className='border rounded-full p-3 cursor-pointer'>
                  <a href="https://www.instagram.com/cersyafaa" target="_blank"><BsInstagram size={20} /></a>
                </div>

                <div className='border rounded-full p-3 cursor-pointer'>
                  <a href="https://open.spotify.com/user/6chuvtw3y6jcbhwut6gpfd10e?si=a87ddfd2f3d54ec0" target="_blank"><BsSpotify size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* achievements section */}
      <section className='mt-10 md:pt-36 pb-10 md:pb-36 border-b pt-5' id='experience'>
        <h5 className='text-base md:text-xl text-center'>This is my</h5>
        <h1 className='text-3xl md:text-6xl font-bold text-center mt-5'>Experience</h1>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          {/* front end */}
          <div className='mt-10 bg-[#FFC5C3] dark:bg-[#68242a] p-10 md:w-[45%] text-[#68242a] dark:text-[#FFC5C3] h-[300px] overflow-y-auto md:mr-5 rounded-lg hover:scale-105 transition duration-150 ease-in-out'>
            <h1 className='text-3xl font-bold text-center mb-5'>Front End</h1>
            <ul className='list-outside grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
              <li>
                <h1 className='font-bold text-xl'>HTML</h1>
                <p>Advanced</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>CSS</h1>
                <p>Advanced</p>
              </li>


              <li>
                <h1 className='font-bold text-xl'>Tailwind</h1>
                <p>Advanced</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>ReactJs</h1>
                <p>Intermediate</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>NextJs</h1>
                <p>Basic</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>Android Studio</h1>
                <p>Basic</p>
              </li>
            </ul>
          </div>

          {/* back end */}
          <div className='mt-10 bg-[#FFC5C3] dark:bg-[#68242a] overflow-y-auto p-10 md:w-[45%] h-[300px] text-[#68242a] dark:text-[#FFC5C3] md:ml-5 rounded-lg hover:scale-105 transition duration-150 ease-in-out'>
            <h1 className='text-3xl font-bold text-center mb-5'>Back End</h1>
            <ul className='list-outside grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
              <li className=''>
                <h1 className='font-bold text-xl'>Node Js</h1>
                <p>Basic</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>Firebase</h1>
                <p>Basic</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>Mysql</h1>
                <p>Intermediate</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>PHP</h1>
                <p>Advanced</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>Laravel</h1>
                <p>Basic</p>
              </li>

              <li>
                <h1 className='font-bold text-xl'>Java</h1>
                <p>Intermediate</p>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* gallery section */}
      <section className='mt-10 md:pt-36 pb-10 md:pb-36 border-b pt-5' id='gallery'>
        <h5 className='text-base md:text-xl text-center'>Welcome to</h5>
        <h1 className='text-3xl md:text-6xl font-bold text-center mt-5'>Gallery</h1>
        <p className='text-sm md:text-lg text-center mt-5'>my favorite photo, food, etc.</p>
        <div className='columns-2 md:columns-4 gap-4 xl:w-[1200px] mx-auto space-y-3 mt-20'>
          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g1.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g3.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g2.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g5.png' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g4.png' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g7.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g6.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g8.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g10.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g9.jpeg' width={300} height={300} alt='g1' />
          </div>

          <div className='break-inside-avoid'>
            <Image className='rounded-xl hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out' src='/img/g11.jpeg' width={300} height={300} alt='g1' />
          </div>
        </div>
      </section>

      {/* what i offer */}
      <section className='mt-10 md:mt-36 pb-10 md:pb-20 md:border-b pt-5' id='offer'>
        <h5 className='text-base md:text-xl text-center'>Why you should</h5>
        <h1 className='text-center font-bold text-3xl mt-5 md:text-6xl'>Hire Me</h1>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1000px] mx-auto'>
          <div className='bg-[#0000005a] shadow-xl hover:scale-105 transition duration-150 ease-in-out rounded-xl p-5'>
            <RiTeamFill size={30} className='mx-auto' />
            <h1 className='text-center font-semibold mt-4 text-xl'>Teamwork</h1>
          </div>

          <div className='bg-[#0000005a] shadow-xl hover:scale-105 transition duration-150 ease-in-out rounded-xl p-5'>
            <FaBookReader size={30} className='mx-auto' />
            <h1 className='text-center font-semibold mt-4 text-xl'>Fast Learner</h1>
          </div>

          <div className='bg-[#0000005a] shadow-xl hover:scale-105 transition duration-150 ease-in-out rounded-xl p-5'>
          <BsPersonWorkspace size={30} className='mx-auto' />
            <h1 className='text-center font-semibold mt-4 text-xl'>Hardworking</h1>
          </div>

          <div className='bg-[#0000005a] shadow-xl hover:scale-105 transition duration-150 ease-in-out rounded-xl p-5'>
          <BsCodeSquare size={30} className='mx-auto' />
            <h1 className='text-center font-semibold mt-4 text-xl'>Interest in web development</h1>
          </div>

          
        </div>
      </section>

      {/* footer section */}
      <section className='mt-10 pb-10'>
        <div className='flex justify-between items-center'>
          <div className='hidden md:block'>
            <p>yasersyafaa@gt.student.pens.ac.id</p>
          </div>
          <div className='hidden md:flex items-center gap-4'>
            <Link href='https://www.linkedin.com/in/yaser-syafa' ><BsLinkedin size={25} /></Link>
            <Link href='https://www.instagram.com/cersyafaa' ><BsInstagram size={25} /></Link>
            <Link href='https://www.spotify.com/user/6chuvtw3y6jcbhwut6gpfd10e?si=a87ddfd2f3d54ec0' ><BsSpotify size={25} /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
