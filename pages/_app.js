import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { ContextWrapper, useAppContext } from '../lib/context'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import '../styles/colors.css'


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const themeLight = {
  "type": "light",
  "palette": {
    "selection": "#c2f7b3",
    "link": "#da1637"
  }
}

const themeDark = { "type": "dark" } 

// We need two components so that context works

function App({ props: { Component, pageProps } }) {
  const [ { theme }, dispatch ] = useAppContext()
  
  return (
    <GeistProvider theme={ theme === 'dark' ? themeDark : themeLight }>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}

function AppRoot(props) {

  return <ContextWrapper>
    <App props={props}/>
  </ContextWrapper>
}

export default AppRoot
