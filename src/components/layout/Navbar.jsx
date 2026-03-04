import React from 'react'

export default function Navbar() {
  const menues = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "FAQ",
      href: "/",
    },
    {
      name: "Changelog",
      href: "/",
    },
    {
      name: "Blog",
      href: "/",
    },
    {
      name: "Download",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ]
  return (
    <nav className='h-20 border flex items-center px-10'>
      <h1 className='mr-auto text-[#632EE3] text-xl font-semibold'>eTicket</h1>
      <div className='flex items-center gap-8'>
        {
          menues?.map(menu => <div key={menu?.name}>{menu?.name}</div>)
        }
        <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-md text-white'>+ New Ticket</button>
      </div>
    </nav>
  )
}
