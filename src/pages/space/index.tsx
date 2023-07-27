
import React, { useEffect, useState } from 'react'
import SpaceLayout from '@/components/Layout/SpaceLayout'
import fs from 'fs'
import { parse } from 'csv-parse';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
export default function Space({ soura }) {
  const [souraAffichable, setSoura] = useState('')
  console.log({ soura })
  return (<main id="spacePage" className='flex justify-center  w-[70%] m-auto
  items-center mt-20 bg-slate-600 h-screen ' >
    <div className="flex flex-col">
      <h2 className='text-gray-200  '> qq </h2>
    </div>
    <div className="  ">
      <div className="flex flex-col ">

        <h2 className='text-gray-50  block'> Your own Space </h2>
        <div className="flex ">

          <div className="flex">Progress</div>
          <div className="flex">Stats</div>
          <div className="flex">Progress</div>
          <div className="flex">Stats</div>
        </div>
      </div>
      <div className="flex flex-row">safhas</div>
      <div className="flex">Progress</div>
      <div className="flex">Stats</div>
    </div>
  </main>)
}

Space.getLayout = function getLayout(page, pageProps) {
  return (<SpaceLayout {...pageProps} title=' liismaiil space dashboard '> {page}</SpaceLayout>)
}

export const getServerSideProps = async (context) => {
  console.log({ context })
  try {

    return {
      props: {

      },
      revalidate: 600
    }
  }
  catch (error) {
    return {
      props: {

      },
      error,
      revalidate: 600
    }
  }

})