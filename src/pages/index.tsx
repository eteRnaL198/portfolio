import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Portfolio | Home">
    <div className="flex flex-col mx-auto w-11/12 md:flex-row">
      {/* <div className="flex flex-col flex-grow items-center justify-center leading-loose tracking-wide text-xl w-full sm:text-3xl"> */}
      <div className="flex flex-col items-center justify-center leading-loose tracking-wide text-xl w-full sm:text-3xl">
        <p>Welcome to my portfolio!</p>
        <p>Please see in order from my profile</p>
        <Link href="/profile">
          <a className="bg-blue-400 mt-4 px-8 rounded-2xl shadow-md text-white hover:bg-blue-300 hover:shadow-sm focus:bg-blue-300 focus:shadow-sm"
          >Profile</a>
        </Link>
      </div>
      <img src="/images/undraw_Hello_re_3evm.svg" alt="" className="h-40 mb-10" />
    </div>
  </Layout>
)

export default IndexPage
