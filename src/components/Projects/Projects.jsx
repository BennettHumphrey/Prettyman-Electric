import React, { useState } from 'react'
import SubPageHeader from '../SubPageHeader'
import { projects, subPages } from '../../resources/data'
import Footer from '../Footer'
import Modal from './Modal'
import Nav from '../Nav/Nav'

const Projects = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState({});

  return (
    <div className='bg-main' >
        <Nav  />
        <SubPageHeader data={subPages.projects} />
        <div className='flex flex-wrap justify-center items-center gap-3
                        max-w-[950px] m-auto py-8 px-6 sm:gap-6' >
          {projects.map((data, i) => (
            <div onClick={() => {
              setCurrentModal(data)
              setModalOpen(true)
              }} key={i}
                className='w-[280px] m-auto '>
              <img src={data.img[0]}
                  className='h-[200px] w-[280px] shadow-lg  
                            hover:rounded-2xl duration-500 hover:cursor-pointer hover:scale-105' />
              <h4 className='text-text' >
                {data.title}
              </h4>
              {modalOpen ? <Modal setModalOpen={setModalOpen} data={currentModal} /> : null}
            </div>
            
          ))}
        </div>
        <Footer  />
    </div>
  )
}

export default Projects