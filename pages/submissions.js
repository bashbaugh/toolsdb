import Layout from '../components/Layout'
import { getCategories } from '../lib/data'
import ReactMarkdown from 'react-markdown'
import submissionGuide from '../content/submissions.md'
import mdRenderers from '../lib/mdRenderers'

export default function SubmissionForm({ categories }) {
  return (
    <Layout categories={categories} title='Submit a tool' header='Submit a Tool'>  
      <div>
        <ReactMarkdown source={submissionGuide} renderers={mdRenderers} />
        <br />
        <a href='https://airtable.com/shrXx1BcagzO2D4Jm' target='_blank' rel='noopener noreferrer'>Open Submission Form</a>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { categories: await getCategories() },
    revalidate: 1,
  }
}
