import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { Layout } from '../layout/Layout'
import { SlatomateProvider, SlatomateClient } from 'slatomate-web-sdk'

const client = new SlatomateClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SlatomateProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SlatomateProvider>
  )
}
export default MyApp
