import { getCategories } from '../../lib/data'
import allowCors from '../../lib/cors'
import { categoryNameToSlug } from '../../lib/slugs'

export default allowCors(async (req, res) => {
  let categories = await getCategories()

  categories = categories.map(c => ({ 
    id: c.id,
    name: c.fields.name,
    description: c.fields.description,
    url: `${process.env.BASE_URL}/${categoryNameToSlug(c.fields.name)}`,
  }))

  res.json({ categories })
})
