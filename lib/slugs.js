
export const categoryNameToSlug = (name) => name
  .split(' ')
  .map(word => {
    return word.toLowerCase()
  })
  .join('-')
  .replace(/,-/g, '_')

export const categorySlugToName = (slug) => slug
  .replace(/_/g, ',-')
  .split('-')
  .map(word => {
    if (['and'].includes(word)) return word
    else return word[0].toUpperCase() + word.substring(1)
  })
  .join(' ')

export const tagNameToSlug = (name) => name.replace(/ /g, '-')

export const tagSlugToName = (slug) => slug.replace(/-/g, ' ')

