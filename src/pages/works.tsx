import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Works: NextPage = () => {
  return (
    <Layout title="Portfolio | Works">
      <div className="mx-auto py-7 w-11/12 max-w-screen-lg">
        <h1 className="font-bold text-4xl text-center tracking-wider mb-7"
        >Works</h1>
        <div className="grid gap-10">
          <div className="grid gap-5 items-center sm:grid-cols-2">
            <img src="/images/wordchaintalker.jpg" alt="" className="shadow-md w-3/5 mx-auto"/>
            <div className="bg-white flex flex-col flex-grow p-10 rounded-3xl shadow-md w-full">
              <h2 className="font-bold mb-1 text-xl tracking-wider sm:text-2xl"
              >Word Chain Talker</h2>
              <div className="text-lg sm:text-lg">
                <p>ボットと尻取りができるアプリです。</p>
                <p>名前によってユーザーを管理しているため、名前を入力するだけでゲームを始められます。</p>
                <p>ランキング機能を実装しました。</p>
                <p>使用した技術は以下になります。</p>
                <p className="font-bold tracking-wide"
                >React, TypeScript, TailwindCSS, Firebase</p>
              </div>
              <div className="flex flex-grow items-end justify-center mt-3 w-full">
                <a href="https://wordchaingame-3e0fc.web.app/" className="bg-blue-400 font-bold leading-normal px-8 rounded-2xl shadow-md tracking-wider text-2xl text-white hover:bg-blue-300 hover:shadow-sm focus:bg-blue-300 focus:shadow-sm"
                >VISIT</a>
              </div>
            </div>
          </div>
          <div className="grid gap-5 items-center sm:grid-cols-2">
            <img src="/images/portfolio.png" alt="" className="shadow-md"/>
            <div className="bg-white flex flex-col flex-grow p-10 rounded-3xl shadow-md w-full">
              <h2 className="font-bold mb-1 text-2xl tracking-wider"
              >Portfolio</h2>
              <div className="text-lg">
                <p>現在ご覧になっているサイトです。</p>
                <p>レスポンシブ対応しております。</p>
                <p>使用した技術は以下になります。</p>
                <p className="font-bold tracking-wide"
                >Next.js, TypeScript, TailwindCSS</p>
              </div>
              <div className="flex flex-grow items-end justify-center mt-3 w-full">
                <Link href="/">
                  <a className="bg-blue-400 font-bold leading-normal px-8 rounded-2xl shadow-md tracking-wider text-2xl text-white hover:bg-blue-300 hover:shadow-sm focus:bg-blue-300 focus:shadow-sm"
                  >VISIT</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-5 items-center sm:grid-cols-2">
            <img src="/images/devhall.png" alt="" className="shadow-md"/>
            <div className="bg-white flex flex-col flex-grow p-10 rounded-3xl shadow-md w-full">
              <h2 className="font-bold mb-1 text-2xl tracking-wider"
              >Dev Hall</h2>
              <div className="text-lg">
                <p>駆け出しエンジニア同士で共同開発をする時の手助けをするアプリです。</p>
              </div>
              <div className="flex flex-grow items-end justify-center mt-3 w-full">
                <p className="bg-gray-400 font-bold leading-normal px-8 rounded-2xl shadow-md text-center text-2xl text-white "
                >Under Development...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Works