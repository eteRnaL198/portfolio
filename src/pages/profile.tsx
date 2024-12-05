import { NextPage } from "next";
import Layout from "../components/Layout";

const Profile: NextPage = () => {
  return (
    <Layout title="Portfolio | Profile">
      <div className="mx-auto py-7 w-11/12 max-w-screen-lg">
        <h1 className="font-bold text-4xl text-center tracking-wider mb-7">
          Profile
        </h1>
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="bg-white grid gap-4 p-8 rounded-3xl tracking-wide shadow-md">
            <div>
              <p className="text-xl sm:text-2xl">永木 郁也</p>
              <p className="sm:text-xl">東京都市大学 情報工学部 卒業</p>
              <p className="sm:text-xl">
                東京工業大学(現 東京科学大学) 情報理工学院 修士1年
              </p>
            </div>
            <div className="sm:text-lg">
              <p>
                2021年11月~現在までかっこ株式会社でフルスタックエンジニアとしてインターンをしており､フロントエンドからバックエンド、インフラまで開発に携わっています｡
              </p>
              <p>
                2024年8月~11月まで株式会社メルカリでバックエンドエンジニアとしてメルカリ
                ハロのプロダクト開発に携わりました。
              </p>
              <br></br>
              <p>
                学士の卒業研究では､C言語をベースにしたアスペクト指向言語の言語処理系を開発しました｡
              </p>
              <p>
                現在､修士の研究では多様なプログラミング言語に対してリファクタリングを検出するツールを開発しています｡
              </p>
            </div>
            <div className="flex">
              <a
                href="https://twitter.com/programikuya"
                className="hover:opacity-70 mr-4"
              >
                <img src="/images/twitter.svg" alt="" className="h-9" />
              </a>
              <a
                href="https://github.com/eteRnaL198"
                className="hover:opacity-70"
              >
                <img src="/images/github-icon.svg" alt="" className="h-9" />
              </a>
            </div>
          </div>
          <img
            src="/images/undraw_feeling_proud_qne1.svg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
