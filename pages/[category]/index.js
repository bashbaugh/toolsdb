import Layout from '../../components/Layout'
import { getCategories, getTools } from '../../lib/data'
import { categoryNameToSlug, categorySlugToName } from '../../lib/slugs'
import { Text } from '@geist-ui/react'
import ToolCard from '../../components/ToolCard'

export default function Category({ categories, category, tools }) {
  if (!category) return <Layout>Loading....</Layout>

  return (
    <Layout categories={categories} title={category.fields.name} header={category.fields.name}>
      <Text type='secondary'>
        {category.fields.description}
      </Text>
      <ToolCard.Group tools={tools} />
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const categoryName = categorySlugToName(ctx.params.category)
  const categories = await getCategories()
  let category

  categories.forEach(c => {
    if (c.fields.name === categoryName) {
      c.isSelected = true
      category = c
    }
  })

  if (!category) return { notFound: true }

  const tools = await getTools().then(t => t
    .filter(t => category?.fields?.tools?.includes(t.id))
    .sort((t1, t2) => !t1.fields.categoryPriority && t2.fields.categoryPriority || -1) // Nonexistant prioririties are sorted last
    .sort((t1, t2) => (t1.fields.categoryPriority < t2.fields.categoryPriority) ? -1 : 1) // Lower priorites should go first
  )

  return {
    props: { categories, category, tools },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getCategories())?.map(c => '/' + categoryNameToSlug(c.fields.name)),
    fallback: true
  }
}
