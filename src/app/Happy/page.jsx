import React from 'react'
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
const page = () => {
  return (
    <div>
        <Link href="/Icecream">
        <Spline
        scene="https://prod.spline.design/qyxTT9uGdr6HhynL/scene.splinecode" 
      />
      </Link>
    </div>
  )
}

export default page
