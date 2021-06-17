import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex h-full mx-auto tracking-wide w-11/12">
      <div className="flex flex-col items-center justify-center leading-loose text-3xl w-full">
        <p className=""
        >Welcome to my portfolio!</p>
        <p className=""
        >Please see in order from my profile</p>
        <Link href="/profile">
          <a className="bg-white mt-4 px-8 rounded-2xl shadow-md"
          >Profile</a>
        </Link>
      </div>
      <img src="/images/undraw_Hello_re_3evm.svg" width="350" alt="" />
    </div>
  </Layout>
)

export default IndexPage
