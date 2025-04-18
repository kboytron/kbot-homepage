import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a recent Computer Science graduate from the University of Iowa!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Karan Singh
          </Heading>
          <p>Software Engineer (AI / ML, Data, Cloud)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/karan.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Karan is a recent Computer Science graduate based in Iowa with hands-on experience in software and data engineering.
          He is skilled in Python, JavaScript, AWS, and SQL, and has successfully delivered data visualization
          projects and contributed to software development initiatives at 8AMApp and Labelbox.
          His entrepreneurial spirit drove him to found a profitable venture (MUTCoinTeam) trading digital assets, showcasing his innovative mindset and problem-solving capabilities.
          Outside of technology, he enjoys basketball and weightlifting.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Mumbai, India
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Founded MUTCoinTeam
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Won Best Data Visualization at HackUIowa
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Data Engineer Intern at 8AMApp
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Software Engineer Contractor at Labelbox
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Graduated from the University of Iowa
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Basketball, Weightlifting,
          Stock Trading
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/kboytron" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @kboytron
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com/kboytron" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @kboytron
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/karansingh2/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @karansingh2
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
