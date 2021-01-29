import Layout from '../components/Layout'
import { getCategories } from './api/get-categories'

export default function SubmissionForm() {
  return (
    <Layout>  
      <div>
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
