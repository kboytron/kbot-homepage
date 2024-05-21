import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Karan Singh. All Rights Reserved. <br />
      This website is built based on <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama&apos;s website</a>
    </Box>
  )
}

export default Footer
