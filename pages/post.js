import { useRouter } from 'next/router';
import Layout from '../Components/Layout';

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h2>{router.query.title}</h2>
      <p>This is the article content.</p>
    </>
  )
}

const Page = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}
export default Page