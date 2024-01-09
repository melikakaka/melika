'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isshow,setisshow]=useState<boolean>(false)
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 text-white text-5xl">
     <p>
سایت ملیکا مشرف :))))
     </p>
     <button onClick={()=>{setisshow(!isshow)}} className='shadow-2xl bg-pink-950 p-8 rounded-md mt-8 mb-8' >
      {isshow?"دکمه قایم شدن ملیکا :(":"دکمه پیدا شدن ملیکا :)"}   
     </button>
     {isshow?<Image src={'/1.jpg'} alt='' width={400} height={600}/>:null}
       
    </main>
  )
}
