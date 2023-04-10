import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Melo</title>
      <meta name='og:title' content='Melo' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='melo:site' content='@ccrsxx' />
      <meta name='melo:card' content='summary_large_image' />
    </Head>
  );
}
