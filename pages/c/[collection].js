import Layout from '../../components/Layout'
import { getTags, getCategories } from '../../lib/data'
import { tagNameToSlug, tagSlugToName } from '../../lib/slugs'

export default function Collection({ categories }) {
  return (
    <Layout categories={categories}>  
      THIS IS A COLLECTION BUT IT REALLY IS A TAG
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const tagName = tagSlugToName(ctx.params.tag)
  const tags = await getTags()

  return {
    props: { tags, categories: await getCategories() },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getTags()).map(c => '/tag/' + tagNameToSlug(c.fields.name)),
    fallback: false
  }
}
