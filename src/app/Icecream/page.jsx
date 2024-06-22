import React from 'react'
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
const page = () => {
  return (
    <div>
        <Link href="/Yay">
        <Spline
        scene="https://prod.spline.design/jBtk6C4LsJm5BCW8/scene.splinecode" 
      />
      </Link>
    </div>
  )
}

export default page
