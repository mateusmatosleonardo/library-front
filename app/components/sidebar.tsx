'use client'

import Image from 'next/image'
import NavLink from './nav-link'
import Logo from '@/public/logo.svg'
import OverviewIcon from '@/public/overview.svg'
import UserIcon from '@/public/user.svg'
import BookIcon from '@/public/book.svg'
import CalenderIcon from '@/public/calender.svg'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-72 min-h-screen h-screen bg-blue-primary">
      <div className='flex items-center gap-x-2 p-4'>
        <Image
          priority
          src={Logo}
          alt="Logo icon"
        />
        <span className='text-2xl font-semibold text-white'>
          Lib.
          <span className='text-orange-primary'>Manager</span>
        </span>
      </div>
      <div className='w-full h-[1px] bg-[#53525262]' />
      <div className='flex flex-col flex-1 pt-8 gap-y-2'>
        <NavLink
          href='/overview'
          current_page={pathname}
        >
          <Image
            priority
            src={OverviewIcon}
            alt="Overview icon"
          />
          <span className={`text-white ${pathname === '/overview' ? 'font-medium' : 'font-light'}`}>
            Overview
          </span>
        </NavLink>
        <NavLink
          href='/users'
          current_page={pathname}
        >
          <Image
            priority
            src={UserIcon}
            alt="User icon"
          />
          <span className={`text-white ${pathname === '/users' ? 'font-medium' : 'font-light'}`}>
            Usuários
          </span>
        </NavLink>
        <NavLink
          href='/books'
          current_page={pathname}
        >
          <Image
            priority
            src={BookIcon}
            alt="Book icon"
          />
          <span className={`text-white ${pathname === '/books' ? 'font-medium' : 'font-light'}`}>
            Livros
          </span>
        </NavLink>
        <NavLink
          href='/loans'
          current_page={pathname}
        >
          <Image
            priority
            src={CalenderIcon}
            alt="Calender icon"
          />
          <span className={`text-white ${pathname === '/loans' ? 'font-medium' : 'font-light'}`}>
            Empréstimos
          </span>
        </NavLink>
      </div>
    </div >
  )
}