import AirtablePlus from 'airtable-plus'

const table = (tableName) => new AirtablePlus({
  baseID: process.env.BASE_ID,
  apiKey: process.env.AIRTABLE_KEY,
  tableName
})

const catTable = table('Categories')
const tagTable = table('Tags')


export const getCategories = async () => await catTable.read({ sort: [{field: "order", direction: "asc"}] })

export const getTags = async () => await tagTable.read({ sort: [{field: "name", direction: "asc"}] })