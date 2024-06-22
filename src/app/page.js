import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <Link href="/Congratulations">
     <Spline
        scene="https://prod.spline.design/94dLJFaEvvc2zNMv/scene.splinecode" 
      />
      </Link>
    </>
  );
}
