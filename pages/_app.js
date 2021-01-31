import 'styles/globals.css';
import Head from 'next/head';
import Navbar from 'components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-800 min-h-screen overflow-auto">
      <Head>
        <link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />

        <meta name="description" content="Calculate time and material requirements to max a skill's mastery in Melvor Idle." />

        {/* Open Graph */}
        <meta property="og:title" content="Melvor Mastery Calculator" />
        <meta property="og:description" content="Calculate time and material requirements to max a skill's mastery in Melvor Idle." />
        <meta property="og:image" content={'public/index.png'} />
        <meta property="og:url" content="https://mastery-calculator.vercel.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="/" />
        <meta property="twitter:url" content="/" />
        <meta name="twitter:title" content="Melvor Mastery Calculator" />
        <meta name="twitter:description" content="Calculate time and material requirements to max a skill's mastery in Melvor Idle." />
        <meta name="twitter:image" content={"public/index.png"} />

      </Head>
      <Navbar />
      <div className="max-w-7xl h-96 mx-auto px-2 sm:px-6 lg:px-8">

        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
