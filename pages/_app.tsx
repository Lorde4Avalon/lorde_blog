import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Layout } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Avalon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href='_next/static/media/bg_4-min.db587154.jpg' as="image" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
