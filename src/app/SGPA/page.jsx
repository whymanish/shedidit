import React from 'react'
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
const page = () => {
  return (
    <div>
        <Link href="/Happy">
       <Spline
        scene="https://prod.spline.design/9UHb5b3-IvYTYHcK/scene.splinecode" 
      />
      </Link>
    </div>
  )
}

export default page
