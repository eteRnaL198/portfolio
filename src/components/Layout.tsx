import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div className="flex flex-col min-h-full bg-blue-100">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/f_f_business_6_svg_f_business_6_1nbg.svg" />
    </Head>
    <header className="bg-white py-4 rounded-b-2xl shadow-md sticky top-0 w-full">
      <nav className="flex font-bold justify-between mx-auto text-2xl w-11/12">
        <Link href="/">
          <a className=" hover:text-gray-500"
          >Portfolio</a>
        </Link>
        <div className="flex justify-between">
          <Link href="/profile">
            <a className="ml-10 hover:text-gray-500"
            >Profile</a>
          </Link>
          <Link href="/skills">
            <a className="ml-10 hover:text-gray-500"
            >Skills</a>
          </Link>
          <Link href="/works">
            <a className="ml-10 hover:text-gray-500"
            >Works</a>
          </Link>
        </div>
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

export default Layout
