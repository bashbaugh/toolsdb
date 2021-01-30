import Layout from '../../components/Layout'
import { getCategories, getTools, getTags } from '../../lib/data'
import { tagNameToSlug, tagSlugToName } from '../../lib/slugs'
import ToolCard from '../../components/ToolCard'

export default function Tag({ categories, tools, tagName }) {
  return (
    <Layout categories={categories} title={`${tagName} tag`} header={`Tools tagged ${tagName}`}>  
      <ToolCard.Group tools={tools} />
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const tagName = tagSlugToName(ctx.params.tag)
  const tools = await getTools().then(t => t.filter(t => t.fields.tagNames.includes(tagName)))

  return {
    props: { categories: await getCategories(), tools, tagName },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getTags()).map(t => '/t/' + tagNameToSlug(t.fields.name)),
    fallback: false
  }
}
