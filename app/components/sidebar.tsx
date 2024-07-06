
"use client"

import { PersonIcon, BookmarkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import NavLink from './nav-link'
import Icon from '@/public/livro.png'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-[18rem] min-h-screen p-6 bg-zinc-900">
      <div className='flex items-center gap-x-4 w-7 h-7'>
        <h1 className='text-3xl font-bold text-gray-300'>
          Biblioteca
        </h1>
        <Image alt='icon' src={Icon} />
      </div>
      <div className='flex flex-col pt-6 gap-y-2'>
        <NavLink
          href='/users'
          bg={pathname === '/users' ? 'bg-green-600' : 'bg-transparent'}
        >
          <PersonIcon className='w-3 h-3 text-white' />
          <p className='text-gray-300'>Usuários</p>
        </NavLink>
        <NavLink
          href='/books'
          bg={pathname === '/books' ? 'bg-green-600' : 'bg-transparent'}
        >
          <BookmarkIcon className='w-3 h-3 text-white' />
          <p className='text-gray-300'>Livros</p>
        </NavLink>
      </div>
    </div>
  )
}