import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
  href: string
  current_page: string
  children: React.ReactNode
}

export default function NavLink(props: NavLinkProps) {
  return (
    <Link
      href={props.href}
    >
      <div className={`flex items-center gap-x-2 py-2.5 px-2 mx-4 rounded-md duration-300 hover:cursor-pointer hover:bg-orange-primary ${props.current_page === props.href ? 'bg-orange-primary' : ''}`}>
        {props.children}
      </div>
    </Link>
  )
}