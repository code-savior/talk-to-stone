import React from 'react'

import { cn } from '@/lib/utils'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import Image from 'next/image'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      <HoverCard>
        <HoverCardTrigger className='cursor-pointer bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>Buy me a coffee</HoverCardTrigger>
        <HoverCardContent className='w-auto'>
          <Image width={120} height={120} src='/qrcode.jpg' alt='' />
        </HoverCardContent>
      </HoverCard>
      {' '}© Talk To Stone.
    </div>
  )
}
