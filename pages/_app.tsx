import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { Layout } from '../layout/Layout'
import { SlatomateClientProvider, SlatomateClient } from 'slatomate-web-sdk'

const client = new SlatomateClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SlatomateClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SlatomateClientProvider>
  )
}
export default MyApp
