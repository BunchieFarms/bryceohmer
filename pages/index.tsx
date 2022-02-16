import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/header';
import Homebody from '../components/homebody/homebody';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>bryce ohmer</title>
        <meta name="description" content="this is MY website, get your own!" />
      </Head>
      
      <Header></Header>
      <Homebody></Homebody>
    </div>
  )
}

export default Home;
