import Layout from '../components/Layout'
import { getCategories } from '../lib/data'
import { Text } from '@geist-ui/react'
import ReactMarkdown from 'react-markdown'
import mdRenderers from '../lib/mdRenderers'
import Link from 'next/link'
import homeContent from '../content/home.md'

export default function Home({ categories }) {
  return (
    <Layout categories={categories} header="My Tool Database" footer={
      <Text type='secondary' small>
        Site built by <a href='https://benjaminashbaugh.me/' target='_blank'>Benjamin Ashbaugh</a> - 
        <Link href='/apidoc'><a> API</a></Link>
        {/* for <a href='https://hackclub.com/' target='_blank' rel='noopener'>Hack Club</a> and you */}
       </Text>
    }>  
      <ReactMarkdown source={homeContent} renderers={mdRenderers} />

      {/* <Link href='https://benjaminashbaugh.me'>My Website</Link> */}

    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories() },
    revalidate: 1,
  }
}
