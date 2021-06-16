import { NextPage } from 'next'
import Layout from '../components/Layout'

const Profile: NextPage = () => {
  return (
    <Layout title="Portfolio | Profile">
      <div>
        <h1>Profile</h1>
        <p>永木 郁也</p>
        <p>都内私立大学 情報工学部</p>
        <p>GitHub: </p>
        <p>Twitter: </p>
      </div>
    </Layout>
  )
}

export default Profile
