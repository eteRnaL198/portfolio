import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Portfolio | Home">
    <div className="flex flex-col justify-around mx-auto w-11/12 max-w-screen-lg sm:flex-row">
      <div className="font-bold flex-1 flex flex-col items-center justify-around tracking-wide text-xl w-full sm:justify-center md:text-2xl lg:text-3xl">
        <p>Welcome to my portfolio!</p>
        <p>See in order from my profile</p>
        <Link href="/profile">
          <a className="bg-blue-400 mt-4 px-8 rounded-2xl shadow-md text-white hover:bg-blue-300 hover:shadow-sm focus:bg-blue-300 focus:shadow-sm"
          >Profile</a>
        </Link>
      </div>
      <img src="/images/undraw_Hello_re_3evm.svg" alt="" className="flex-2 sm:flex-1 sm:w-1/2" />
    </div>
  </Layout>
)

export default IndexPage
