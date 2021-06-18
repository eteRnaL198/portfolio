import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => {
  const navs = [
    { name: "Profile", link: "/"},
    { name: "Portfolio", link: "/portfolio"},
    { name: "Skills", link: "/skills"},
    { name: "Works", link: "/works"},
  ];

  return (
    <div className="flex flex-col min-h-full bg-blue-100">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/f_f_business_6_svg_f_business_6_1nbg.svg" />
      </Head>
      <header className="bg-white py-4 rounded-b-2xl shadow-md sticky top-0 w-full">
        <nav className="flex font-bold justify-between mx-auto text-2xl w-11/12">
          {navs.map((nav, idx) => (
            <Link href={nav.link} key={idx}>
              <a className=" hover:text-gray-500"
              >{nav.name}</a>
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex flex-1">
        {children}
      </main>
      <footer className="bg-gray-800 flex justify-center">
        <small className="p-1 text-white text-xs">&copy; 2021 Ikuya Nagaki</small>
      </footer>
    </div>
  )
}

export default Layout
