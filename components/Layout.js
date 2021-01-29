import Head from 'next/head'
import Sidebar from './Sidebar'

export default function Layout({ title, children, categories }) {
  return (
    <div>
      <Head>
        <title>{ title && (title + ' - ') }Awesomely Productive Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='layout'>
        <div className='sidebar'>
          <Sidebar categories={categories}/>
        </div>
        <div className='page-container'>
          <div className='page'>
            <main>
              {children}
            </main>
          </div>
        </div>
      </div>

      <footer>
        
      </footer>

      <style jsx global>{`
        .page-container {
          margin-left: 220px;
        }

        .page {
          display: block;
          width: 80%;
          margin: 20px auto;
        }

        .sidebar {
        }
      `}</style>
    </div>
  )
}
