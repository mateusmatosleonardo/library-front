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
    <div className="flex flex-col w-72 min-h-screen h-screen bg-[#111111]">
      <div className='flex items-center gap-x-2 mt-6 p-4'>
        <div className='flex items-center gap-x-4 w-8 h-8'>
          <Image alt='icon' src={Icon} />
        </div>
        <h2 className='text-lg font-semibold text-white'>
          Biblioteca Horizonte
        </h2>
      </div>
      <div className='flex flex-col flex-1 pt-12 gap-y-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                href='/users'
                border={pathname === '/users' ? 'border-l-2' : ''}
              >
                <FaRegUser
                  className={`w-[1.1rem] h-[1.1rem] ${pathname === '/users' ? 'text-white' : 'text-[#818591]'}`}
                />
                <span className={`font-medium ${pathname === '/users' ? 'text-white' : 'text-[#818591]'}`}>
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
                border={pathname === '/books' ? 'border-l-2' : ''}
              >
                <FaBook
                  className={`w-[1.1rem] h-[1.1rem] ${pathname === '/books' ? 'text-white' : 'text-[#818591]'}`}
                />
                <span className={`font-medium ${pathname === '/books' ? 'text-white' : 'text-[#818591]'}`}>
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
      <div className='w-full h-[1px] bg-gray-500' />
      <div className='flex items-center pt-6 gap-x-2 p-4'>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/73812069?v=4" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <span className='font-medium text-white'>
          Mateus Leonardo
        </span>
      </div>
      <div className='py-4'>
        <NavLink
          href='/logout'
          border={pathname === '/logout' ? 'border-l-2' : ''}
        >
          <FaSignInAlt
            className={`w-[1.1rem] h-[1.1rem] ${pathname === '/logout' ? 'text-white' : 'text-[#818591]'}`}
          />
          <span className={`font-medium ${pathname === '/logout' ? 'text-white' : 'text-[#818591]'}`}>
            Sair
          </span>
        </NavLink>
      </div>
    </div>
  )
}