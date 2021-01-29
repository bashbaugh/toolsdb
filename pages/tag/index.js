import Layout from '../../components/Layout'
import { getCategories, getTags } from '../../lib/data'
import Tag from '../../components/Tag.js'

export default function Tags({ tags, categories }) {
  return (
    <Layout categories={categories} header='Tags' title='tags'>  
      { tags.map(t => (<Tag name={t.fields.name} color={t.fields.color} key={t.id} />)) }
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories(), tags: await getTags() },
    revalidate: 1,
  }
}
