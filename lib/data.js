import AirtablePlus from 'airtable-plus'

const table = (tableName) => new AirtablePlus({
  baseID: process.env.BASE_ID,
  apiKey: process.env.AIRTABLE_KEY,
  tableName
})

const catTable = table('Categories')
const tagTable = table('Tags')
const collTable = table('Collections')
const toolTable = table('Tools')
const homeTable = table('Home page')


export const getCategories = async () => await catTable.read({ sort: [{field: "order", direction: "asc"}] }).then(filterEmptyNames)

export const getTags = async () => await tagTable.read({ sort: [{field: "name", direction: "asc"}] }).then(filterEmptyNames)
export const getTag = async (name) => (await tagTable.read({ filterByFormula: `{name} = '${name}'` }))[0]

export const getTools = async () => await toolTable.read().then(filterEmptyNames).then(filterAttachments)
export const getTool = async (slug) => (await toolTable.read({ filterByFormula: `{slug} = '${slug}'` }).then(filterAttachments))[0]

function filterAttachments(tools) {
  tools.forEach(t => {
    if (!t.fields.images) return
    t.fields.images = t.fields.images.filter(atmt => atmt.type.startsWith('image/'))
  })
  return tools
}

function filterEmptyNames(data) {
  return data.filter(_ => !!_.fields.name)
}