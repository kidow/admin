import 'styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { Drawer, ErrorBoundary, Layout } from 'containers'
import { Backdrop } from 'components'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Layout isMobile={pageProps.isMobile}>
        <Component {...pageProps} />
      </Layout>
      <Backdrop />
      {pageProps.isMobile && <Drawer />}
    </ErrorBoundary>
  )
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const { req } = ctx
  const userAgent = req?.headers['user-agent']
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent || '')
  return { pageProps: { isMobile } }
}

export default App
