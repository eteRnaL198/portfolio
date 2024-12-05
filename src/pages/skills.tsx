import { NextPage } from "next";
import Layout from "../components/Layout";

const SkillsPage: NextPage = () => {
  return (
    <Layout title="Portfolio | Skills">
      <div className="mx-auto py-7 w-11/12 max-w-screen-lg">
        <h1 className="font-bold text-4xl text-center tracking-wider">
          Skills
        </h1>
        <h2 className="font-bold text-2xl text-center tracking-wider mt-7">
          実務経験あり
        </h2>
        <div className="grid grid-cols-2 gap-8 text-xl tracking-wider mt-7 sm:grid-cols-3">
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">HTML</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">CSS</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">JavaScript</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">TypeScript</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">React</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Python</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Django</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Go</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">GraphQL</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Git</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">AWS</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">PostgreSQL</p>
          </div>
        </div>

        <h2 className="font-bold text-2xl text-center tracking-wider mt-7">
          独学
        </h2>
        <div className="grid grid-cols-2 gap-8 text-xl tracking-wider mt-7 sm:grid-cols-3">
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Sass</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Next.js</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Ruby</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Ruby on Rails</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">C</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Java</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">Firebase</p>
          </div>
          <div className="bg-white flex flex-col items-center p-7 rounded-3xl shadow-md w-full">
            <p className="text-center text-bold">MySQL</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;
