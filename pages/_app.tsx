import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ErrorBoundary, Layout } from 'containers'
import { Backdrop } from 'components'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Backdrop />
    </ErrorBoundary>
  )
}

export default MyApp
