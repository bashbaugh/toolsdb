import Layout from '../../components/Layout'
import { getCategories, getTools, getTags, getTag } from '../../lib/data'
import { tagNameToSlug, tagSlugToName } from '../../lib/slugs'
import { Text } from '@geist-ui/react'
import ToolCard from '../../components/ToolCard'

export default function Tag({ categories, tools, tagName, tagColor }) {
  
  if (!tagName || !tools) return <Layout>Loading....</Layout>

  return (
    <Layout categories={categories} title={`${tagName} tag`} header={
      <Text h4>Tools tagged <span style={{ background: `#${tagColor}99`, padding: '3px' }}>{ tagName }</span></Text>
    }>  
      <ToolCard.Group tools={tools} />
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const tagName = tagSlugToName(ctx.params.tag)
  console.log(tagName)
  const tagColor = (await getTag(tagName))?.fields?.color

  if (!tagColor) return { notFound: true }

  const tools = await getTools().then(t => t.filter(t => t.fields.tagNames.includes(tagName)))

  return {
    props: { categories: await getCategories(), tools, tagName, tagColor },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getTags()).map(t => '/t/' + tagNameToSlug(t.fields.name)),
    fallback: true
  }
}
