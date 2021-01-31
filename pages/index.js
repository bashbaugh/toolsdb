import Layout from '../components/Layout'
import { getCategories } from '../lib/data'
import { Text } from '@geist-ui/react'
import ReactMarkdown from 'react-markdown'
import mdRenderers from '../lib/mdRenderers'

const homeContent = `
The purpose of this site is to serve as a medium-sized collection of tools you can use to become more productive. Categories range from task management apps to writing extensions. To get started, choose a category from the menu on the left.

`

export default function Home({ categories }) {
  return (
    <Layout categories={categories} header='Awesomely Productive Tools' footer={
      <Text type='secondary' small>Site built by <a href='https://benjaminashbaugh.me/' target='_blank'>Benjamin Ashbaugh</a> for <a href='https://hackclub.com/' target='_blank' rel='noopener'>Hack Club</a> and you</Text>
    }>  
      <ReactMarkdown source={homeContent} renderers={mdRenderers} />


    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories() },
    revalidate: 1,
  }
}
