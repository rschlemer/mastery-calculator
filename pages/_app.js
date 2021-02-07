import 'styles/globals.css';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from 'components/navbar';
import { Meta } from 'components/meta';

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-800 min-h-screen overflow-auto">
      <Head>
        <link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
        <Meta />
      </Head>

      <div className="max-w-7xl h-96 mx-auto px-2 sm:px-6 lg:px-8">
        <Navbar />
        <div className="flex justify-center p-2">
          <Image src="/logo.svg" width="120" height="120" />
        </div>

        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
