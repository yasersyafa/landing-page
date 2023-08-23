import React from 'react'
import { BsPersonWorkspace, BsCodeSquare } from 'react-icons/bs'
import { RiTeamFill } from 'react-icons/ri'
const Modal = ({isVisible, onClose}) => {
  if (!isVisible) {
    return null
  }
  
  return (
    <div className='fixed inset-0 w-full max-h-1/2 bg-black bg-opacity-25 max-h-1/2 backdrop-blur-lg z-40 transition duration-500 ease-in-out' onClick={() => onClose()}>       
        <div className='bg-[white] overflow-y-auto rounded-lg p-5 max-h-[50%] md:max-h-[800px] gap-5 w-[85%] md:w-[50%] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[#68242a]'>  
          <h5 className='text-xs mt-5 md:text-xl text-center'>Why you should</h5>
          <h1 className='text-center font-bold text-3xl md:text-6xl'>Hire Me</h1>
              {/* grid layout */}
          <div className='mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-[1200px] mx-auto'>
            <div className='bg-[#0000005a] shadow-xl hover:scale-105 transition duration-150 ease-in-out rounded-xl p-5'>
              <RiTeamFill size={30} className='mx-auto' />
              <h1 className='text-center font-semibold mt-4 text-xl'>Teamwork</h1>
              <p className='text-xs md:text-base mt-4'>Collaborating with a dynamic team on a captivating e-commerce website project</p>
            </div>


            <div className='bg-[#0000005a] shadow-xl hover:scale-105 transition duration-150 ease-in-out rounded-xl p-5'>
              <BsPersonWorkspace size={30} className='mx-auto' />
              <h1 className='text-center font-semibold mt-4 text-xl'>Hardworking</h1>
              <p className='text-xs md:text-base mt-4'>Through hard work, I achieved the 2nd best award in website creation from vocational high-school </p>
            </div>

            <div className='bg-[#0000005a] shadow-xl hover:scale-105 transition duration-150 ease-in-out rounded-xl p-5'>
              <BsCodeSquare size={30} className='mx-auto' />
              <h1 className='text-center font-semibold mt-4 text-xl'>Interest in web development</h1>
              <p className='text-xs md:text-base mt-4'>I am always learning about website development, especially in the front-end aspect, every day</p>
            </div>           
          </div>
          <p className='text-center text-xs md:text-base mt-5'>click anything to close</p>
        </div>
    </div>
  )
}

export default Modal