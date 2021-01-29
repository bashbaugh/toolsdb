import Layout from '../components/Layout'
import { getCategories } from '../lib/data'
import ReactMarkdown from 'react-markdown'

const submissionGuide = `
Thank you for submitting a tool! Here are a few guidelines. Keep in mind that this list is somewhat opinionated so don't be offended if your submission isn't added.

 + Only submit tools that help people be productive. This can be anything from a calendar app to a time tracker to a writing extension, however its primary purpose should either be to reduce the time needed to complete a task, or to help manage/track tasks more efficiently. Check the categories for some other acceptable types.
 + The tool should be somewhat popular, as we don't want this site to become too large.
 + Make sure to add a suitable description, category, tags, etc. 
`

export default function SubmissionForm({ categories }) {
  return (
    <Layout categories={categories} title='Submit a tool' header='Submit a Tool'>  
      <div>
        <ReactMarkdown source={submissionGuide} />
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
