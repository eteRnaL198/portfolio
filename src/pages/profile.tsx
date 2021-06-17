import { NextPage } from 'next'
import Layout from '../components/Layout'

const Profile: NextPage = () => {
  return (
    <Layout title="Portfolio | Profile">
      <div>
        <h1 className=""
        >Profile</h1>
        <p>永木 郁也</p>
        <p>都内私立大学 情報工学部 2年</p>
        <p>
          大学でコンピュータサイエンスを学びながら、web系の言語を独学しています。
          2020年4月から一年間、主にフロントエンドを独学してきました。
          将来はwebエンジニアを目指しています。
        </p>
      </div>
    </Layout>
  )
}

export default Profile
