import { NextPage } from 'next'
import Layout from '../components/Layout'

const SkillsPage: NextPage = () => {
  return (
    <Layout
      title="Portfolio | skills"
    >
      <p>HTML</p>
      <p>CSS</p>
      <p>Sass</p>
      <p>JavaScript</p>
      <p>TypeScript</p>
      <p>React</p>
      <p>Next.js</p>
    </Layout>
  )
}

export default SkillsPage