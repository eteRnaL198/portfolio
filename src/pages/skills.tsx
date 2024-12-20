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
          実務での開発経験あり
        </h2>
        <div className="grid grid-cols-2 gap-8 text-xl tracking-wider mt-7 sm:grid-cols-3">
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
            <p className="text-center text-bold">HTML</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
            <p className="text-center text-bold">CSS</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            <p className="text-center text-bold">JavaScript</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
            <p className="text-center text-bold">TypeScript</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <p className="text-center text-bold">React</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />
            <p className="text-center text-bold">Python</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            />
            <p className="text-center text-bold">Django</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
            />
            <p className="text-center text-bold">Go</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
            />
            <p className="text-center text-bold">GraphQL</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />
            <p className="text-center text-bold">Git</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            />
            <p className="text-center text-bold">AWS</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            />
            <p className="text-center text-bold">PostgreSQL</p>
          </div>
        </div>

        <h2 className="font-bold text-2xl text-center tracking-wider mt-7">
          独学/大学での開発経験あり
        </h2>
        <div className="grid grid-cols-2 gap-8 text-xl tracking-wider mt-7 sm:grid-cols-3">
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
            />
            <p className="text-center text-bold">Sass</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />
            <p className="text-center text-bold">Next.js</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
            />
            <p className="text-center text-bold">Ruby</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg"
            />
            <p className="text-center text-bold">Ruby on Rails</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            />
            <p className="text-center text-bold">C</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            />
            <p className="text-center text-bold">Java</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
            />
            <p className="text-center text-bold">Firebase</p>
          </div>
          <div className="bg-white flex justify-center gap-2 p-7 rounded-3xl shadow-md w-full">
            <img
              className="w-8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            />
            <p className="text-center text-bold">MySQL</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;
