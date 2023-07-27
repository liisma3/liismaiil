import React, { ReactElement, useEffect, useRef, useState } from 'react'
import slug from 'slug'
import { ViewerTypeData } from '@/api/viewer/viewer.types'
import _ from 'lodash'
import { dmSans, dmSerif } from '@/styles/fonts'
import { useRouter } from 'next/router'


export default function Organisations({ organisations,
    countries,
    cities }: { organisations: ViewerTypeData[], countries: string[], cities: string[] }) {
    const router = useRouter()
    const [organisationsFront, setOrganisationsFront] = useState(organisations)
    const [country, setCountry] = useState(countries[0])
    const [city, setCity] = useState(cities[0])

    const countryRef = useRef('')
    const cityRef = useRef('')

    const organisationHandler = () => {
        /*        const reg = new RegExp(organisationRef.current.value, 'g')
               const searchFilter = _.filter(organisations, (org: ViewerTypeData) => {
                   console.log({ org })
                   return (reg.test(org?.login) || reg.test(org.email))
       
               })
               href={{ pathname: 'about', query: { name: 'leangchhean' } }}>
               console.log({ searchFilter })
               setOrganisationsFront(searchFilter) */

        let searchQuery = ''
        if (countryRef.current !== '') {
            searchQuery = `${searchQuery}country=${countryRef.current}`
        } if (cityRef.current !== '') {
            searchQuery = `${searchQuery}country=${cityRef.current}`
        }
        router.push({
            pathname: '/search',
            query: { searchQuery },
        })
    }
    const selectOrganisationHandler = (org) => {
    }
    const handleCountryChange = (e) => {
        if (e.target.value !== "") {
            setCountry(e.target.value)
        }
    }
    const countrySelect = () => {
        return (<>
            <label htmlFor="country">Choose country:</label>

            <select name="country" id="country" onChange={(e) => handleCountryChange(e)}>
                <option value="">--Please choose an option--</option>
                {countries.map((country) => <option key={`${slug(country)}`} value={`${slug(country)}`} >{country}</option>)}

            </select>
        </>
        )
    }
    const handleCityChange = (e) => {
        if (e.target.value !== "") {

        }
    }
    const citySelect = () => {
        return (<>
            <label htmlFor="country">Choose country:</label>

            <select name="country" id="country" onChange={(e) => handleCityChange(e)}>
                <option value="">--Please choose an option--</option>
                {countries.map((country) => <option key={`${slug(country)}`} value={`${slug(country)}`} >{country}</option>)}

            </select>
        </>
        )
    }

    /** h-[calc(100vh-600px)] */
    return (
        <div className="mx-20 backdrop-blur-md flex flex-col gap-4 items-center justify-start min-h-[400px]  " >
            <div className="my-4 flex gap-2 ">
                {countrySelect}
                {citySelect}

                <div onClick={organisationHandler} className='btn' > search </div>
            </div>
            <div className="flex flex-row justify-start  items-center gap-4 ">

                {
                    organisationsFront.map((org) => <div key={org._id}
                        className=' border  cursor-pointer hover:animate-zoomIn
                    border-slate-300 hover:border-indigo-300
                     p-0 rounded-lg h-80 w-60 bottom-0 '
                        onClick={() => selectOrganisationHandler(org)} >
                        <div className='h-52 w-full flex-col items-center justify-center  rounded-lg'
                            style={{ "backgroundImage": `url(${org.avatar})` }} >

                            <div className={`${dmSans.className} px-[25%]  pt-56  h-auto w-full font-bold`}>
                                {org.login}
                            </div>
                            <div className=' pt-55 h-auto w-full'>
                                {org.status}
                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div >

    )
}

