import Head from 'next/head'
import Sidebar from './Sidebar'
import { Text, Button } from '@geist-ui/react'
import { ArrowLeftCircle } from '@geist-ui/react-icons'
import { useRouter } from 'next/router'
import { useIsSmallScreen } from '../lib/hooks'

export default function Layout({ title, header, children, categories, backButton, aboveHeader, footer }) {
  const router = useRouter()
  const isSmallScreen = useIsSmallScreen()

  return (
    <div>
      <Head>
        <title>{ title && (title + ' - ') }Tools // Benjamin Ashbaugh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`layout ${isSmallScreen ? 'mobile' : 'default' }`}>
        <div className='sidebar'>
          <Sidebar categories={categories}/>
        </div>
        <div className={`page-container`}>
          <div className='page'>
            { backButton && <Button onClick={_ => router.back()} icon={<ArrowLeftCircle />} auto size='small' style={{ marginBottom: '5px' }} />}
            { aboveHeader && <div style={{ margin: '5px 0' }}>
              { aboveHeader }
            </div>}
            { typeof header === 'string' && (
              <Text h2>
                { header }
              </Text>
            )}
            { typeof header !== 'string' && header }
            <main>
              {children}
            </main> 
          </div>
        </div>

        <footer>
          <div className='footer-content'>
            { footer }
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .page-container {
          min-height: 95vh;
          margin-bottom: -40px;
        }

        .layout.default .page-container {
          margin-left: 220px;
        }

        .layout.mobile .page-container {
          margin-left: 0;
        }

        .page {
          display: block;
          width: 90%;
          max-width: 1200px;
          margin: 50px auto;
        }

        footer {
          height: 40px;
        }

        .footer-content {
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
