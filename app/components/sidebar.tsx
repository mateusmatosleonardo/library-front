"use client"

import { PersonIcon, BookmarkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/public/livro.png'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-96 min-h-screen p-6 bg-zinc-900">
      <div className='flex items-center gap-x-4 w-7 h-7'>
        <h1 className='text-3xl font-bold text-gray-300'>
          Biblioteca
        </h1>
        <Image alt='icon' src={Icon} />
      </div>
      <div className='flex flex-col pt-6 gap-y-2'>
        <Link
          href="/users"
        >
          <div className={`
          flex
          items-center
          gap-x-2
          py-[5px]
          px-1
          hover:cursor-pointer 
          hover:bg-green-600 
          rounded-sm 
          duration-300
          ${pathname === '/users' ? 'bg-green-600' : 'bg-transparent'}
          `}
          >
            <PersonIcon className='w-3 h-3 text-white' />
            <p className='text-gray-300'>Usuários</p>
          </div>
        </Link>
        <div className={`
          flex
          items-center
          gap-x-2
          p-1
          hover:cursor-pointer 
          hover:bg-green-600 
          rounded-sm 
          duration-300
          ${pathname === '/books' ? 'bg-green-600' : 'bg-transparent'}
          `}>
          <BookmarkIcon className='w-3 h-3 text-white' />
          <p className='text-gray-300'>Livros</p>
        </div>
      </div>

      <div className='w-7 h-7'>

      </div>
    </div>
  )
}