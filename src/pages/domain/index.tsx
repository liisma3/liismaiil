
import React from 'react'
import { FaReact, FaPython, FaCity, FaEbay, FaLinux, FaGit, FaTeamspeak, FaRaspberryPi, FaHandHolding, FaJs, FaHtml5, FaNodeJs, FaCss3Alt, FaCcStripe } from 'react-icons/fa'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import AppLayout from '@/components/Layout'
export default function Domain() {

  return (

    <div className="h-full  bg-gray-200 p-10">
      <h2 className='text-4xl text-center my-10 font-semibold'> Tablets selections</h2>
      <div className="grid sm:grid-cols-3  grid-cols-3 ">
        <div className='border-solid border-8 hover:border-dotted border-orange-900 '>
          domain
        </div>
        <div>

        </div>
        <div>

        </div>

      </div>
    </div>


  )
}

Domain.getLayout = function getLayout({ page, pageProps }) {
  return (<AppLayout {...pageProps}> {page}</AppLayout>)
}


export const getServerSideProps = withPageAuthRequired(( ) => {

  return {
    props: {
      success: true
    }
  }
})