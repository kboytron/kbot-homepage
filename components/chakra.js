import PropTypes from 'prop-types'
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

Chakra.propTypes = {
  cookies: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
