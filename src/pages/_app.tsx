import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import '@/styles/global.css'
import SEO from '@/lib/next-seo-config';
import { NextSeo } from 'next-seo';
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { InterfaceProvider } from '@/store/contexts/InterfaceContext'
import { useApollo } from '@/lib/apolloClient';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import 'react-toastify/dist/ReactToastify.css';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif'
})
export default function myApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const apolloClient = useApollo(pageProps)
  const getLayout = Component?.getLayout || ((page) => page)


  return (

    <>
      <Head>
        <title>liismaiil organistaion intern hub </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NextSeo {...SEO} />


      <ToastContainer position="top-center" />
      <UserProvider>

        <ApolloProvider client={apolloClient}>
          <InterfaceProvider>
            <main className={`${dmSans.variable} ${dmSerif.variable} `}>
              {getLayout(<Component {...pageProps} />, pageProps)}
            </main>
          </InterfaceProvider>

        </ApolloProvider>
      </UserProvider>

    </>
  )
}
