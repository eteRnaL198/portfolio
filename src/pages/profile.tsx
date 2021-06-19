import { NextPage } from 'next'
import Layout from '../components/Layout'

const Profile: NextPage = () => {
  return (
    <Layout title="Portfolio | Profile">
      <div className="mx-auto py-7 w-11/12 max-w-screen-lg">
        <h1 className="font-bold text-4xl text-center tracking-wider mb-7"
        >Profile</h1>
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="bg-white grid gap-4 p-8 rounded-3xl tracking-wide shadow-md">
            <div>
              <p className="text-xl sm:text-2xl">永木 郁也</p>
              <p className="sm:text-xl">都内私立大学 情報工学部 2年</p>
            </div>
            <div className="sm:text-lg">
              <p>大学でコンピュータサイエンスを学びながら、web系の言語を独学しています。</p>
              <p>2020年4月から一年間、主にフロントエンドを独学してきました。</p>
              <p>将来はwebエンジニアを目指しています。</p>
            </div>
            <div className="flex">
              <a href="https://twitter.com/programikuya" className="hover:opacity-70 mr-4">
                <img src="/images/twitter.svg" alt="" className="h-9" />
              </a>
              <a href="https://github.com/eteRnaL198" className="hover:opacity-70">
                <img src="/images/github-icon.svg" alt="" className="h-9" />
              </a>
            </div>
          </div>
          <img src="/images/undraw_feeling_proud_qne1.svg" alt="" className="w-full" />
        </div>
      </div>
    </Layout>
  )
}

export default Profile
