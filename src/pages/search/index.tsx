import React, { useEffect } from 'react'

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


export default function Search(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  console.log({ props })
  const { organisations } = props

  return (

    <main className="bg-gray-200 mt-20  max-w-screen-2xl justify-center items-center" >
      <header className='h-full   bg-gradient-to-r from-[#0f1f47] to-[#5f6984]'>

        <Organisations organisations={organisations} />
      </header>

      <Guests guests={[]} />
      <div className="max-w-full
       m-auto flex justify-center items-center">

        <MapComponent />
      </div>
    </main>

  )
}


Search.getLayout = function getLayout(page, pageProps) {
  return (<AppLayout {...pageProps} title=' liismaiil asaas'> {page}</AppLayout>)
}


export async function getServerSidePropsr(context) {
  await connectMongoose()
 /*  const organisations: ViewerTypeData[] = [];
  const docs = await ViewerModel.find({ status: { $in: ['ORGA', 'ADMIN', 'LIIS'] } }).exec()
  docs.forEach((doc: ViewerTypeData) => {
    const { _id, createdAt, updatedAt, login, email,
      organisation = null, website = null, coords, status, addressGeo,
      instagram = null, stripe_account_id = null, phone = null, avatar,
      walletId = null, bio = null, } = doc._doc


    _id, login, email, phone, instagram, website, avatar: { url }, coords: { lat, long }, addressGeo, bio 

    organisations.push({
      _id: _id.toString(),
      login, email, stripe_account_id,
      phone, bio,
      status,
      website, instagram, organisation, walletId,
      addressGeo: `${addressGeo}`,
      createdAt: JSON.stringify(createdAt),
      coords,
      avatar: `${avatar.url}`,
      updatedAt: JSON.stringify(updatedAt),

    });

  });

  const products: ProductTypeData[] = [];
  const productsArray = await ProductModel.find({ productStatus: { $in: ['LIIS', 'ORGA', 'FAMI'] } }).exec()
  productsArray.forEach((doc: ProductTypeData) => {

    products.push({
      title, description, price, productStatus, promo, promotedBy, stock, image, author
    });
  });
 */
  return {
    props: {
     
    },
    revalidate: 600
  }

}