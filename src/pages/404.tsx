import React from 'react';

import Image from 'next/image';
import Router from 'next/router';
//import Presentation from '@/layouts/Presentation';
export default function NotFound() {
  /* <Presentation title={'liismaiil page note found'}> */
  return (
    <>
      <div
        onClick={() => Router.push('/')}

        style={{
          height: '60vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div


          style={{
            display: 'inline-block',
            backgroundImage: `url("assets/error.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '40vh',
            height: '40vh',
          }}
        >
          <Image src={'/assets/error.png'} alt="error Image with baloon" width={300} height={300} />
        </div>
        <div >
          <span style={{ fontSize: '28px', color: '#a00' }}>Page not Found</span>
        </div>
      </div>
    </>

  );
}
