import 'styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-800 min-h-screen overflow-auto">
      <Head>
        <link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
      </Head>
      <div className="max-w-7xl h-96 mx-auto px-2 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
