import React from 'react'

import { cn } from '@/lib/utils'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
        <HoverCardTrigger className='hidden cursor-pointer bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent sm:inline-block'>Buy me a coffee</HoverCardTrigger>
        <HoverCardContent className='w-auto'>
          <Image width={120} height={120} src='/qrcode.jpg' alt='' />
        </HoverCardContent>
      </HoverCard>

      <Popover>
        <PopoverTrigger className='inline-block cursor-pointer bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent sm:hidden'>Buy me a coffee</PopoverTrigger>
        <PopoverContent className='w-auto'>
          <Image width={120} height={120} src='/qrcode.jpg' alt='' />
        </PopoverContent>
      </Popover>
      {' '}© Talk To Stone.
    </div>
  )
}
