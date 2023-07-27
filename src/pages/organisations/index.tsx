
import React from 'react'
import Organigram from '@/components/organisation'

function khorouj() {
    return (

        <div className="h-full  bg-gray-200 p-10">
            <h2 className='text-4xl text-center my-10 font-semibold'> Sprint </h2>
            <div className="grid sm:grid-cols-3  grid-cols-3 ">
                <div className='border-solid border-8 hover:border-dotted border-orange-900 '>
                    init
                </div>  <div className='border-solid border-8 hover:border-dotted border-orange-900 '>
                    well
                </div>  <div className='border-solid border-8 hover:border-dotted border-orange-900 '>
                    end
                </div>

            </div>
            <div className="grid sm:grid-cols-3  grid-cols-3 ">
                <div className='border-solid border-8 hover:border-dotted border-orange-900 '>
                    < Organigram />
                </div>

            </div>
        </div>


    )
}

export default khorouj