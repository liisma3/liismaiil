
import React, { useEffect, useState } from 'react'
import SpaceLayout from '@/components/Layout/SpaceLayout'
import TabletGridModel from '@/api/tablet/TabletGrid.model'
export default function Space({ tabletGrids }) {
  const [souraAffichable, setSoura] = useState('')
  console.log({ tabletGrids })
  return (
  <main id="spacePage" className='flex justify-center  
  w-[70%] mt-32  h-screen ' >
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
/* 
export const getServerSideProps = async (context) => {
  console.log({ context })
  try {
   const tabletGrids =  await TabletGridModel.find({}).lean().exec();
    
   return {
      props: {
          tabletGrids
      },
      revalidate: 600
    }
  }
  catch (error) {
    return {
      props: {
        tabletGrids:null
    },
           error,
      revalidate: 600
    }
  }

} */