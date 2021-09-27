import type { NextPage } from 'next'
import Head from 'next/head'
import { Login } from '../components/Login'

const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>Login | Slatomate</title>
        <meta name="description" content="Login to your slatomate account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center h-screen">
        <Login />
      </main>


    </div>
  )
}

export default Home
