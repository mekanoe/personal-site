import NextApp, { Container } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'

const GS = createGlobalStyle`
  :root {
    --bg-y: #ffffd7;
    --bg-p: #ffd7d7;
    --bg-b: #d7ffff;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    position: relative;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0.4em 0;
  }
`

export default class App extends NextApp {
  render () {
    const { Component } = this.props
    return <div>
      <Head>
        <meta charSet='utf-8' />
        <title>Kata</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' integrity='sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=' crossOrigin='anonymous' />
      </Head>
      <GS />
      <Layout>
        <Container>
          <Component />
        </Container>
      </Layout>
    </div>
  }
}
