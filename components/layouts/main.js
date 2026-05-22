import Head from 'next/head'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import CoinLoader from '../coin-loader'

const LazyCoin = dynamic(() => import('../coin'), {
  ssr: false,
  loading: () => <CoinLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Karan's homepage" />
        <meta name="author" content="Karan Singh" />
        <meta name="author" content="kboytron" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Karan Singh" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kboytron" />
        <meta name="twitter:creator" content="@kboytron" />
        <meta property="og:site_name" content="Karan Singh" />
        <meta name="og:title" content="Karan Singh" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kbot-homepage.vercel.app/card.png" />
        <title>Karan Singh - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyCoin /> 

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    asPath: PropTypes.string.isRequired,
  }).isRequired,
}

export default Main
