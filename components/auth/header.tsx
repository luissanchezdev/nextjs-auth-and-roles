import React from 'react'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

interface HeaderCardProps{
  label: string
}

function HeaderCard({ label } : HeaderCardProps) {
  return (
    <>
      <h1 className={ cn("text-4xl text-center", font.className)}>Inicio de sesión</h1>
      <p className='text-["#444"] text-center'>{ label }</p>
    </>
  )
}

export default HeaderCard