// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import AirtablePlus from 'airtable-plus'

const table = new AirtablePlus({
  baseID: process.env.BASE_ID,
  apiKey: process.env.AIRTABLE_KEY,
  tableName: 'Categories',
})

export const getCategories = async () => await table.read()

export default async (req, res) => {
  res.json({ categories: await getCategories() })
}
