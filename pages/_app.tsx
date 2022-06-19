import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ErrorBoundary, Layout } from 'containers'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  )
}

export default MyApp
