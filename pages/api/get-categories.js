import { getCategories } from '../../lib/data'

export default async (req, res) => {
  res.json({ categories: await getCategories() })
}
