import Layout from '../../components/Layout'
import { getCategories, getTags } from '../../lib/data'
import Tag from '../../components/Tag.js'

export default function Tags({ tags, categories }) {
  return (
    <Layout categories={categories} header='Tags' title='tags'>  
      <Tag.Group tags={tags} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories(), tags: await getTags() },
    revalidate: 1,
  }
}
