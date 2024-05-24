import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

// Spinner component for loading animation
export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size) / 2)" // Corrected centering calculation
  />
)

// Container component for the 3D model with responsive design
export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="coin"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

// Default loader component
const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
