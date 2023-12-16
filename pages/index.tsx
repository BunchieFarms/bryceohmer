import Head from 'next/head'
import Header from '../components/header/header';
import Homebody from '../components/homebody/homebody';

export default function Home(props: any) {
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