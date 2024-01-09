'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isshow,setisshow]=useState<boolean>(true)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white text-3xl">
     <p>
      ملیکا
     </p>
     <button onClick={()=>{setisshow(!isshow)}} >
      دکمه نشون دادن ملیکا
     </button>
     {isshow?<Image src={'/1.jpg'} alt='' width={400} height={600}/>:null}
       
    </main>
  )
}
