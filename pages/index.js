import Layout from '../components/Layout'
import { getCategories } from '../lib/data'

export default function Home({ categories }) {
  return (
    <Layout categories={categories}>  
      HEYYYY
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories() },
    revalidate: 1,
  }
}
