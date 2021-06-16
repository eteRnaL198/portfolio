import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <p>Welcome to my portfolio!</p>
    <Link href="/profile">
      <a>Profile</a>
    </Link>
    <Link href="/skills">
      <a>Skills</a>
    </Link>
    <Link href="/works">
      <a>Works</a>
    </Link>
  </Layout>
)

export default IndexPage
