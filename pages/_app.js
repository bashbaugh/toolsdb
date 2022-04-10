import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react'
import { ContextWrapper, useAppContext } from '../lib/context'
import { useRefreshAfterLoad } from '../lib/hooks'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import '../styles/colors.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const themeLight = Themes.createFromLight({
  "type": "customLight",
  "palette": {
    "selection": "#c2f7b3",
    "link": "#da1637"
  }
})

const themeDark = Themes.createFromDark({ 
  "type": "customDark" 
})

// We need two components so that context works

function App({ props: { Component, pageProps } }) {
  const [ { theme } ] = useAppContext()
  // useRefreshAfterLoad() // To ensure data is up-to-date
  
  return (
    <GeistProvider themes={[themeDark, themeLight]} themeType={theme === 'dark' ? 'customDark' : 'customLight'}>
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
