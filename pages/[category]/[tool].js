import Layout from '../../components/Layout'
import { getCategories, getTool, getTools } from '../../lib/data'
import { Text, Link as StyledLink, Display, Button, Spacer } from '@geist-ui/react'
import { Edit3 } from '@geist-ui/react-icons'
import { categoryNameToSlug } from '../../lib/slugs'
import Tag from '../../components/Tag'
import mdRenderers from '../../lib/mdRenderers'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function Tool({ categories, tool }) {

  if (!tool || !categories) return <Layout>Loading....</Layout>

  const prefilledEditLink = `https://airtable.com/shr4gfJmDYfmifsct?prefill_tool=${tool.id}`

  return (
    <Layout categories={categories} title={tool.fields.name} header={tool.fields.name} backButton aboveHeader={
      <Tag.Group tagNames={tool.fields.tagNames} tagColors={tool.fields.tagColors} />
    }>
      <Text small>
        <StyledLink icon block small href={tool.fields.url} target='_blank' rel='noopener noreferrer'>{tool.fields.url}</StyledLink>
      </Text>
      <ReactMarkdown source={tool.fields.details} renderers={mdRenderers} />
      { !tool.fields.details && <Text small blockquote>This tool does not have a description. </Text>}

      { tool.fields?.images?.length && <>
        <Text h3>Images</Text>
        { tool.fields.images.map(image => {
          const width = Math.min(1200, image.thumbnails.large.width)
          const height = width*image.thumbnails.large.height/image.thumbnails.large.width

          return (<Display shadow key={image.id}>
            <Image
              src={image.thumbnails.large.url}
              width={width}
              height={height}
              quality={80}
            />
          </Display>)
        })}
      </>}
      
      <Spacer y={8} />
      <a href={prefilledEditLink} target='_blank' rel='noopener noreferrer'>
        <Button icon={<Edit3 />} auto type='abort' size='small'>Submit revision</Button>
      </a>

      <style jsx>{`
      `}</style>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const toolSlug = ctx.params.tool
  const tool = await getTool(toolSlug)

  const categories = await getCategories()

  categories.forEach(c => {
    if (c.fields.name === tool.fields.categoryName[0]) c.isSelected = true
  })

  return {
    props: { categories, tool },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  return {
    paths: (await getTools()).map(t => `/${categoryNameToSlug(t.fields.categoryName[0])}/${t.fields.slug}`),
    fallback: true
  }
}
