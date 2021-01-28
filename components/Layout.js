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
      <main>
        {children}
      </main>
      </div>

      <footer>
        
      </footer>

      <style jsx global>{`
        .layout {
        }

        .sidebar {
          height: 100vh;
          width: 15%;
          min-width: 200px;
          max-width: 250px;
          border-right: 2px solid gray;
        }
      `}</style>
    </div>
  )
}
