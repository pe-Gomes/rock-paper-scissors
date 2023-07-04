import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Frontend Mentor | Rock, Paper, Scissors</title>
        <link
          rel="shortcut icon"
          href="../../public/favicon.png"
          type="image/x-icon"
          sizes="32x32"
        />
      </Head>
      <body>
        <Main />
        <div className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Pedro Gomes</a>.
        </div>

        <NextScript />
      </body>
    </Html>
  )
}
