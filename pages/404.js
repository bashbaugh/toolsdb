import Layout from '../components/Layout'
import { getCategories } from '../lib/data'
import Link from 'next/link'

export default function Page404({ categories }) {
  return (
    <Layout categories={categories} title='404' header='Page Not Found :('>  
      <div>
        <p>We couldn't find that page. Select a category from the left or <Link href='/'><a>go home</a></Link>.</p>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories() },
    revalidate: 1,
  }
}
