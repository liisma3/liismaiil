import React, { useState } from 'react'
import Head from 'next/head'

import Footer from '@/components/Layout/Footer'
import useInterface from '@/store/hooks/useInterface'
import Navigation from './Navigation'
import second from '@ta'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
function Layout({ children, title }) {
    const { show } = useInterface()
    const [backend, setBackend] = useState(false)
    const [dark, setDark] = useState(false)
    console.log({ children })
    const darkToggleHandler = () => {
        setDark((dark) => !dark)
    }
    return (
        <main className='min-h-screen max-w-screen-2xl font-mont overflow-x-hidden justify-center items-center '>
            <Head>
                <title>{title}</title>
                <meta name="description" content="liismaiil asaas dashboard " />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navigation />

            <main className=" m-auto max-w-7xl  ">

                <div id="dark-mode-toggle" onClick={() => setDark((dark) => !dark)}
                    className="fixed top-24 right-0 inline-block w-12 cursor-pointer 
            rounded-l-xl 
            bg-zinc-800 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 p-2 
            text-3xl">
                    {!dark ? <SunIcon onClick={darkToggleHandler} className="h-6 w-6 text-blue-500" /> :
                        <MoonIcon onClick={darkToggleHandler} className="h-6 w-6 text-blue-500" />
                    }
                </div>
                <main className='bg-white max-w-7xl '>

                    {children}
                </main>
                <div className=' w-full flex justify-center items-center '>
                    <Footer />
                </div>
            </main ></main>
    )
}

export default Layout