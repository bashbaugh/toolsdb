import Layout from '../components/Layout'
import { getCategories } from './api/get-categories'
import { categoryNameToSlug } from '../lib/category'

export default function Category({ categories }) {
  return (
    <Layout categories={categories}>  
      THIS IS A CATEGORY
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories() },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getCategories()).map(c => '/' + categoryNameToSlug(c.fields.name)),
    fallback: false
  }
}
