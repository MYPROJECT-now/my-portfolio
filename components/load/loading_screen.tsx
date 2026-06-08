import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading_screen = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center w-full h-screen text-[#00ddff] bg-linear-to-b from-[#03070E] to-[#071C33]'>
        <p className= "font-bold font-sans text-3xl tracking-wide-4xl">
            INITIALIZING
        </p> 

        <div className='rounded-full  border-8 border-[#19a9c0] border-t-transparent h-10 w-10 animate-spin'/>
    </div>
  )
}

export default Loading_screen
