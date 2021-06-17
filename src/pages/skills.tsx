import { NextPage } from 'next'
import Layout from '../components/Layout'

const SkillsPage: NextPage = () => {
  return (
    <Layout title="Portfolio | Skills">
      <div className="mx-auto py-7 w-11/12">
        <h1 className="font-bold text-4xl text-center tracking-wider mb-7"
        >Skills</h1>
        <div className="grid grid-cols-3 gap-8 text-xl tracking-wider">
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/html-5.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >HTML</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/css-3.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >CSS</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/sass.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >Sass</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/javascript.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >JavaScript</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/typescript-icon.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >TypeScript</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/react.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >React</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/nextjs.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >Next.js</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <img src="/images/linux-tux.svg" alt="" className="mb-4 h-20" />
            <p className="text-center text-bold"
            >Linux基礎</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SkillsPage