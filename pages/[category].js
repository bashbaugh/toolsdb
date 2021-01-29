import Layout from '../components/Layout'
import { getCategories } from '../lib/data'
import { categoryNameToSlug, categorySlugToName } from '../lib/slugs'

export default function Category({ categories }) {
  return (
    <Layout categories={categories}>  
      THIS IS A CATEGORY
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const categoryName = categorySlugToName(ctx.params.category)
  const categories = await getCategories()

  categories.forEach(c => {
    if (c.fields.name === categoryName) c.isSelected = true
  })

  return {
    props: { categories },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getCategories()).map(c => '/' + categoryNameToSlug(c.fields.name)),
    fallback: false
  }
}
