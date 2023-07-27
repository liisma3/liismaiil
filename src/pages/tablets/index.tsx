
import React from 'react'
import AppLayout from '@/components/Layout/index'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
export default function Tablets() {
  return (<div className="h-full  bg-gray-600 p-30">
    <h2 className='text-4xl text-center my-10 font-semibold'> Bismi ALLAH   </h2>

  </div>


  )
}
Tablets.getLayout = function getLayout(page, pageProps) {
  return (<AppLayout {...pageProps} title=' liismaiil tablets dashboard '> {page}</AppLayout>)
}

export const getServerSideProps = withPageAuthRequired(async () => {
  try {
    /**#TODO iplement seach tablets  */
    return { props: {} }

  } catch (error) {

  }

})