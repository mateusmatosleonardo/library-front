"use client"

import { PersonIcon, BookmarkIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image'
import NavLink from './nav-link'
import Icon from '@/public/open-book.png'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-100">
      <div className='flex items-center gap-x-4 w-7 h-7'>
        <Image alt='icon' src={Icon} />
      </div>
      <div className='flex flex-col items-center pt-6 gap-y-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                href='/users'
                bg={pathname === '/users' ? 'bg-gray-200' : 'bg-transparent'}
              >
                <PersonIcon className='w-[1.1rem] h-[1.1rem] text-zinc-800' />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>
              <p>Usuários</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                href='/books'
                bg={pathname === '/books' ? 'bg-gray-200' : 'bg-transparent'}
              >
                <BookmarkIcon className='w-[1.1rem] h-[1.1rem] text-zinc-800' />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>
              <p>Livros</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}