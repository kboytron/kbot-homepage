import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import PropTypes from 'prop-types'

if (globalThis.window !== undefined) {
  globalThis.window.history.scrollRestoration = 'manual'
}

const handleExitComplete = () => {
  if (globalThis.window !== undefined) {
    globalThis.window.scrollTo({ top: 0 })
  }
}

const Website = ({ Component, pageProps, router }) => {

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={handleExitComplete}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <SpeedInsights />
        <Analytics />
      </Layout>
    </Chakra>
  )
}

Website.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
}

export default Website