import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Works: NextPage = () => {
  return (
    <Layout title="Portfolio | Works">
      <div className="mx-auto py-7 w-11/12">
        <h1 className="font-bold text-4xl text-center tracking-wider mb-7"
        >Works</h1>
        <div className="grid gap-10">
          <div className="flex justify-between">
            <img src="/images/wordchaintalker.jpg" alt="" className="h-72 shadow-md"/>
            <div className="bg-white flex flex-col flex-grow ml-8 p-10 rounded-3xl">
              <h2 className="mb-3 text-2xl tracking-wider"
              >Word Chain Talker</h2>
              <p>ボットと尻取りができるアプリです。</p>
              <p>名前によってユーザーを管理しているため、名前を入力するだけでゲームを始められます。</p>
              <p>ランキング機能を実装しました。</p>
              <p>React TypeScript TailwindCSS Firebase</p>
              <div className="flex flex-grow items-end justify-center w-full">
                <a href="" className="bg-blue-400 leading-normal mt-4 px-8 rounded-2xl shadow-md tracking-wider text-2xl text-white hover:bg-blue-300 hover:shadow-sm focus:bg-blue-300 focus:shadow-sm"
                >VISIT</a>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between">
            <img src="/images/portfolio.png" alt="" className="h-72 shadow-md"/>
            <div className="bg-white flex flex-col flex-grow mr-8 p-10 rounded-3xl">
              <h2 className="mb-3 text-2xl tracking-wider"
              >Portfolio</h2>
              <p>現在ご覧になっているサイトです。</p>
              <p>Next.js TypeScript TailwindCSS</p>
              <div className="flex flex-grow items-end justify-center w-full">
                <Link href="/">
                  <a href="" className="bg-blue-400 leading-normal mt-4 px-8 rounded-2xl shadow-md tracking-wider text-2xl text-white hover:bg-blue-300 hover:shadow-sm focus:bg-blue-300 focus:shadow-sm"
                  >VISIT</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  justify-between">
            <img src="/images/portfolio.png" alt="" className="h-72 shadow-md"/>
            <div className="bg-white flex flex-col flex-grow ml-8 p-10 rounded-3xl">
              <h2 className="mb-3 text-2xl tracking-wider"
              >Dev Hall</h2>
              <p>駆け出しエンジニア同士で共同開発をする時の手助けをするアプリです。</p>
              <div className="flex flex-grow items-end justify-center w-full">
                <p className="bg-gray-400 leading-normal mt-4 px-8 rounded-2xl shadow-md text-center text-2xl text-white "
                >Under development...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Works