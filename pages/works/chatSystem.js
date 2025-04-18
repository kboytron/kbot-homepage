import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Simple Chat">
    <Container>
      <Title>
        Simple Chat <Badge>2024</Badge>
      </Title>
      <P>
        A lightweight, Python-based messaging application supporting peer-to-peer communication
        over UDP with user discovery managed through a centralized TCP-based directory server.
        The system uses JSON serialization for standardized message exchange and incorporates
        basic error handling for robust operation.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>User Registration:</strong> Clients register their username and network details
          with the directory server via TCP.
        </ListItem>
        <ListItem>
          <strong>Peer-to-Peer Messaging:</strong> Direct UDP communication for fast, efficient
          messaging between users.
        </ListItem>
        <ListItem>
          <strong>Concurrent Operations:</strong> Multi-threaded implementation ensures responsive
          handling of incoming messages and user inputs.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Sockets API, Multithreading, JSON</span>

        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
            [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/chat.png" alt="Simple Chat Thumbnail" />
      </Center>

      <WorkImage src="/images/works/chatArch.png" alt="Simple Chat Architecture" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
