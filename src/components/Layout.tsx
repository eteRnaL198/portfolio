import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
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
        <Link href="/skills">
          <a>Skills</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/users">
          <a>Users List</a>
        </Link>
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <small>&copy; 2021 eteRnaL198</small>
    </footer>
  </div>
)

export default Layout
