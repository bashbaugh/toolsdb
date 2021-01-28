import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { ContextWrapper, useAppContext } from '../lib/context'

const themeLight = {
  "type": "light",
  "palette": {
    "selection": "#c2f7b3"
  },
  "sidebar": {
    "border": "1px solid gray"
  }
}

const themeDark = {
  "type": "dark",
  "palette": {
    "selection": "#c2f7b3"
  },
  "sidebar": {
    "border": "1px solid gray"
  }
}

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
