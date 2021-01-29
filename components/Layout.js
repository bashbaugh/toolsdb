import Head from 'next/head'
import Sidebar from './Sidebar'
import { Text } from '@geist-ui/react'

export default function Layout({ title, header, children, categories }) {
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
            { header && (
              <Text h2>
                { header }
              </Text>
            )}
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
          width: 90%;
          max-width: 1200px;
          margin: 50px auto;
        }

        .sidebar {
        }
      `}</style>
    </div>
  )
}
