/* eslint-disable no-unused-vars */
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="LinkBox">
    <Container>
      <Title>
        LinkBox <Badge>2023</Badge>
      </Title>
      <P>
        LinkBox is a personal project that serves as a LinkTree-like page with an animated background.
        It allows me to organize and share my links in a visually appealing and interactive manner.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Vanta.js</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/LinkBox">
            github.com/kboytron/LinkBox <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://kboytron.github.io/LinkBox/">
            kboytron.github.io/LinkBox/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/linkbox.webp" alt="linkbox" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
