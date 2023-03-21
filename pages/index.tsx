import Head from 'next/head'
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carnet de suivi Azoya SPA</title>
        <meta name="description" content="Suivez le traitement du SPA d'Azoya en temps réel." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
          <Header>
          </Header>
          <h1>Lorem ipsum dolor sit amet.</h1>
      </main>
    </>
  )
}
