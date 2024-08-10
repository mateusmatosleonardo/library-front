"use client"

import { PersonIcon, BookmarkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import NavLink from './nav-link'
import Icon from '@/public/open-book.png'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-[18rem] min-h-screen p-6 bg-gray-100">
      <div className='flex items-center gap-x-4 w-7 h-7'>
        <h1 className='text-3xl font-bold text-zinc-800'>
          Biblioteca
        </h1>
        <Image alt='icon' src={Icon} />
      </div>
      <div className='flex flex-col pt-6 gap-y-2'>
        <NavLink
          href='/users'
          bg={pathname === '/users' ? 'bg-gray-200' : 'bg-transparent'}
        >
          <PersonIcon className='w-3.5 h-3.5 text-zinc-800' />
          <p className='text-zinc-800 font-medium'>Usuários</p>
        </NavLink>
        <NavLink
          href='/books'
          bg={pathname === '/books' ? 'bg-gray-200' : 'bg-transparent'}
        >
          <BookmarkIcon className='w-3.5 h-3.5 text-zinc-800' />
          <p className='text-zinc-800 font-medium'>Livros</p>
        </NavLink>
      </div>
    </div>
  )
}