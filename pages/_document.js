import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@geist-ui/react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const geistStyles = CssBaseline.flush()

    return { 
      ...initialProps ,
      styles: (<>
        {initialProps.styles}
        {geistStyles}
      </>)
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          {/* Analytics */}
          <script async defer src="https://tools-a.bweb.app/latest.js"></script>
          <noscript><img src="https://tools-a.bweb.app/noscript.gif" alt=""/></noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument