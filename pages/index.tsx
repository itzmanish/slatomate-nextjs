import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Signup } from '../components/Signup'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Slatomate</title>
        <meta name="description" content="Slatomate automation tool for slack." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-40">
        <div className="text-center font-bold text-6xl">
          Automate your slack workflow
          <br />
          with {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Slatomate</span>
        </div>

        <div className="pt-32">
          <Signup />
        </div>
      </main>


    </div>
  )
}

export default Home
