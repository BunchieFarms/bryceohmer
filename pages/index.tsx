import Head from 'next/head'
import Header from '../components/header/header';
import Homebody from '../components/homebody/homebody';

export default function Home() {
  return (
    <div>
      <Head>
        <title>bryce ohmer</title>
        <meta name="description" content="Hi, I'm Bryce" />
      </Head>
      
      <Header></Header>
      <Homebody></Homebody>
    </div>
  )
}