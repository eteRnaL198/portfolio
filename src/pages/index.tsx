import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex mx-auto w-11/12">
      <div className="flex flex-col h-full items-center justify-center leading-loose tracking-wide text-3xl w-full">
        <p className=""
        >Welcome to my portfolio!</p>
        <p className=""
        >Please see in order from my profile</p>
        <Link href="/profile">
        <a className="bg-blue-400 mt-4 px-8 rounded-2xl shadow-md text-white hover:bg-blue-300 hover:shadow-sm focus:bg-blue-300 focus:shadow-sm"
          >Profile</a>
        </Link>
      </div>
      <img src="/images/undraw_Hello_re_3evm.svg" width="350" alt="" />
    </div>
  </Layout>
)

export default IndexPage
