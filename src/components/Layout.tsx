import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div className="flex flex-col h-full">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/f_f_business_6_svg_f_business_6_1nbg.svg" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
        <Link href="/works">
          <a>Works</a>
        </Link>
      </nav>
    </header>
    <main className="flex-1">
      {children}
    </main>
    <footer className="bg-gray-800 flex justify-center">
      <small className="p-1 text-white text-xs">&copy; 2021 Ikuya Nagaki</small>
    </footer>
  </div>
)

export default Layout
