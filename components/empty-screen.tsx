import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight, IconCoffee } from '@/components/ui/icons'

import Image from 'next/image'

const exampleMessages = [
  {
    heading: '解释技术概念',
    message: `什么是 "serverless function"？`
  },
  {
    heading: '总结一篇文章',
    message: '将以下文章简化给一个二年级的孩子： \n'
  },
  {
    heading: '起草一封电子邮件',
    message: `起草一封关于以下内容的电子邮件给我的老板： \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          欢迎来到 
          <span className='bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'> Talk To Stone</span>
        </h1>
        <p className="leading-normal text-muted-foreground">
          你可以在这里开始对话，或尝试以下示例：
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
        {/* <div className="mt-6 flex flex-col space-y-2 sm:hidden">
          <p className="flex items-center">
            <IconCoffee className="mr-2 h-5 w-5 text-muted-foreground" />
            <span className='leading-normal text-muted-foreground'>Buy me a coffee</span>
          </p>
          <Image width={100} height={100} src='/qrcode.jpg' alt='' />
        </div> */}
      </div>
    </div>
  )
}
