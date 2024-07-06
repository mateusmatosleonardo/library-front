import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
  href: string
  bg: string
  children: React.ReactNode
}

export default function NavLink(props: NavLinkProps) {
  return (
    <Link
      href={props.href}
    >
      <div className={`flex items-center gap-x-2 py-[5px] px-1 hover:cursor-pointer hover:bg-green-600 rounded-sm duration-300${props.bg}`}>
        {props.children}
      </div>
    </Link>
  )
}