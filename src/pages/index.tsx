import React, { useEffect, useState } from 'react'


//import Feed from '@/components/presentation/Feed'
import UploadModal from '@/components/presentation/UploadModal'
import connectMongoose from '@/lib/mongoose-db'
import AppLayout from '@/components/Layout/index'
import Presentation from '@/components/presentation'
import Organisations from '@/components/front/Organisations'
import Guests from '@/components/Layout/Guests'
import ViewerModel from '@/api/viewer/Viewer.model'
import ProductModel from '@/api/product/Product.model'
import { ViewerTypeData } from '@/api/viewer/viewer.types'
import { ProductTypeData } from '@/api/product/product.types'
import MapComponent from '@/components/maps/MapComponent'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { searchActions } from '@/store/slices/searchSlice'
import { dispatch } from 'd3'
import { useDispatch, useSelector } from 'react-redux'
import { viewerActions } from '@/store/slices/viewerSlice'
import { RootStateType } from '@/store/store'


export default function Home({ organisations }: { organisations: ViewerTypeData[] }) {
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const { organisationsContext} =   useSelector((state:RootStateType) => state.viewer)

const {setOrganisations}  = viewerActions
const [citiesState, setCitiesState] = useState([])
const [countriesState, setCountriesState] = useState([])
const [statesState, setStatesState] = useState([])
const [continentsState, setContinentsState] = useState([])
 const {setCountries, setContinents, setStates, setCities} =  searchActions
  

 useEffect(() => {
  organisationsContext?.map((org) => {
      if(org.city !== '') {
        setCitiesState(citiesState => typeof citiesState[0] !== 'undefined' ? [...citiesState, org.city]: [org.city])
      }
       if(org.country !== '') {
        setCountriesState(countriesState => typeof countriesState[0] !== 'undefined' ? [...countriesState, org.country]: [org.country])
      }
        if(org.state !== '') {
        setStatesState(statesState => typeof statesState[0] !== 'undefined' ? [...statesState, org.state]: [org.state])
      }
         if(org.continent !== '') {
        setContinentsState(continentsState => typeof continentsState[0] !== 'undefined' ? [...continentsState, org.continent]: [org.continent])
      }
      if(org.addressGeo !== '') {
        console.log({addressGeo:org.addressGeo }) 
        setCountriesState(countriesState => typeof countriesState[0] !== 'undefined' ? 
         [...countriesState, org.addressGeo.split(',')[org.addressGeo.split(',').length-1]]: [org.addressGeo.split(',')[org.addressGeo.split(',').length-1]])

        setCitiesState(citiesState => typeof citiesState[0] !== 'undefined' ? [...citiesState, org.addressGeo.split(',')[org.addressGeo.split(',').length-2]]: 
        [org.addressGeo.split(',')[org.addressGeo.split(',').length-2]])
        }
    })  
      dispatch(setCities({cities:citiesState}))
      dispatch(setCountries({countries:countriesState}))
      dispatch(setStates({states:statesState}))
      dispatch(setContinents({continents:continentsState}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ organisationsContext])

 useEffect(() => {
   dispatch(setOrganisations({organisations:organisations}))
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [organisations])
 

  const cities = organisations.map((org) => {
    return org.addressGeo
  })
/* bg-gradient-to-r from-[#0f1f47] to-[#5f6984] */
  return (
      <main className="bg-gray-200 mt-20  max-w-screen-2xl justify-center items-center" >
      <header className='h-full mb-3 '>
        <Organisations />
      </header>
    <Guests guests={[]} />
      <div className="width-30 h-full m-auto flex justify-center items-center">
        <MapComponent />
      </div>
    </main>

  )
}


Home.getLayout = function getLayout(page, pageProps) {
  return (<AppLayout {...pageProps} title=' liismaiil asaas'> {page}</AppLayout>)
}


export async function getStaticProps() {
  await connectMongoose()
  const organisations: ViewerTypeData[] = [];
  const docs = await ViewerModel.find({ status: { $in: ['ORGA', 'ADMIN', 'LIIS'] } }).exec()
  docs.forEach((doc: ViewerTypeData& any) => {
    const { _id, createdAt, updatedAt, login, email,uid,
      organisation = null, website = null, coords, status, addressGeo,
      instagram = null, stripe_account_id = null, phone = null, avatar,continent='', country='',city='',state='',
     bio = null, } = doc?._doc
    
     organisations.push({
      _id: _id.toString(),
      login, email, stripe_account_id,
      phone, bio,
      status,
      website, instagram, organisation,
      addressGeo: `${addressGeo}`,
      createdAt: JSON.stringify(createdAt),
      coords,
      avatar: avatar.url,
      updatedAt: JSON.stringify(updatedAt),
      uid: uid,continent, country,city,state
    });});

  return {
    props: {
      organisations,
},
    revalidate: 600
  }

}