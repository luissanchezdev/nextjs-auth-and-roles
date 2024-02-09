'use client'

import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

function Social() {
  const router = useRouter()

  return (
    <div className='flex justify-center gap-x-2'>
      <Button
        variant={ "secondary" }
        size={ "lg" }
        onClick={() => router.push('https://google.com')}
      >
        <FcGoogle />
      </Button>
      <Button
        variant={ "secondary" }
        size={ "lg" }
        onClick={() => router.push('https://github.com')}
      >
        <FaGithub />
      </Button>
    </div>
  )
}

export default Social