'use client'

import { FaRegUser, FaBook, FaSignInAlt } from 'react-icons/fa'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import Image from 'next/image'
import NavLink from './nav-link'
import Icon from '@/public/book.png'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col min-h-screen h-screen p-6 bg-white">
      <div className='flex items-center gap-x-2 mt-6'>
        <div className='flex items-center gap-x-4 w-8 h-8'>
          <Image alt='icon' src={Icon} />
        </div>
        <h2 className='text-lg font-semibold text-blue-primary'>
          Biblioteca Horizonte
        </h2>
      </div>
      <div className='flex flex-col flex-1 pt-12 gap-y-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                href='/users'
                bg={pathname === '/users' ? 'bg-[#F0F7FF]' : 'bg-transparent'}
              >
                <FaRegUser
                  className={`w-[1.1rem] h-[1.1rem] ${pathname === '/users' ? 'text-blue-primary' : 'text-zinc-800'}`}
                />
                <span className={`font-medium ${pathname === '/users' ? 'text-blue-primary' : 'text-zinc-800'}`}>
                  Usuários
                </span>
              </NavLink>
            </TooltipTrigger>
            {/* <TooltipContent side='right'>
              <p>Usuários</p>
            </TooltipContent> */}
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                href='/books'
                bg={pathname === '/books' ? 'bg-[#F0F7FF]' : 'bg-transparent'}
              >
                <FaBook
                  className={`w-[1.1rem] h-[1.1rem] ${pathname === '/books' ? 'text-blue-primary' : 'text-zinc-800'}`}
                />
                <span className={`font-medium ${pathname === '/books' ? 'text-blue-primary' : 'text-zinc-800'}`}>
                  Livros
                </span>
              </NavLink>
            </TooltipTrigger>
            {/* <TooltipContent side='right'>
              <p>Livros</p>
            </TooltipContent> */}
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className='w-full h-[1px] bg-gray-200' />
      <div className='flex items-center pt-6 gap-x-2'>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/73812069?v=4" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <span className='font-medium text-zinc-800'>
          Mateus Leonardo
        </span>
      </div>
      <div className='pt-4'>
        <NavLink
          href='/logout'
          bg={pathname === '/logout' ? 'bg-[#F0F7FF]' : 'bg-transparent'}
        >
          <FaSignInAlt
            className={`w-[1.1rem] h-[1.1rem] ${pathname === '/logout' ? 'text-blue-primary' : 'text-zinc-800'}`}
          />
          <span className={`font-medium ${pathname === '/logout' ? 'text-blue-primary' : 'text-zinc-800'}`}>
            Sair
          </span>
        </NavLink>
      </div>
    </div>
  )
}