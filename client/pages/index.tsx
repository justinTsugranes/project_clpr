import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>clpr</title>
        <meta name="description" content="your very own memory sharing app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}
