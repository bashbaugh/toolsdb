import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'
import mdRenderers from '../lib/mdRenderers'
import apiDocMd from '../content/apidoc.md'

export default function SubmissionForm({ categories }) {
  return (
    <Layout categories={categories} title='API' header='Tools API'>  
      <div>
        <ReactMarkdown source={apiDocMd} renderers={mdRenderers} />
      </div>
    </Layout>
  )
}
