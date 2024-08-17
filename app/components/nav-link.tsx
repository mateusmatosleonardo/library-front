import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
  href: string
  border: string
  children: React.ReactNode
}

export default function NavLink(props: NavLinkProps) {
  return (
    <Link
      href={props.href}
    >
      <div className={`flex items-center gap-x-2 py-2 pl-4 hover:cursor-pointer hover:border-l-2  ${props.border}`}>
        {props.children}
      </div>
    </Link>
  )
}