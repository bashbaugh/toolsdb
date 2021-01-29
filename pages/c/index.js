import Layout from '../../components/Layout'
import { getCategories } from '../../lib/data'

export default function Collections({ categories }) {
  return (
    <Layout categories={categories} header='Collections' title='collections'>  
      Coming Soon
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories() },
    revalidate: 1,
  }
}
