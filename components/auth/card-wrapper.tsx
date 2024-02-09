import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card'
import HeaderCard from './header';
import Social from './social';

interface CardWrapperProps {
  children: React.ReactNode,
  headerLabel: string,
  backButtonLabel: string,
  backButtonHref: string
  showSocial?: boolean
}

function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
} : CardWrapperProps) {
  return (
      <Card className='w-full max-w-md flex flex-col justify-center items-center gap-y-4'>
        <CardHeader>
          <HeaderCard label={ headerLabel } />
        </CardHeader>
        <CardContent>
          { children }
        </CardContent>
        <CardFooter>
          { showSocial && (
            <Social />
          )}
        </CardFooter>
      </Card>
  )
}

export default CardWrapper