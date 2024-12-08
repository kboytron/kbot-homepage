/* eslint-disable no-unused-vars */
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  SimpleGrid,
  Center
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
        Completed as part of the Spring 2024 offering of CS:3640 Introduction to Networks at the University of Iowa.
      </P>
      <br></br>
      <P>
        This messaging system is comprised of two main components: a chat client and a directory server. 
        The chat client is used to send messages, while the directory server maps usernames to IP addresses.
      </P>

      <UnorderedList my={4}>
        <ListItem>User Registration: Client registers with the directory server</ListItem>
        <ListItem>Message Sending: Clients send messages over UDP, either directly or by querying the server</ListItem>
        <ListItem>Message Receiving: Client listens for incoming messages on specified UDP port</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, socket, threading</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
          [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/chat.png" alt="simpleChat Thumbnail" />
      </Center>
        <WorkImage src="/images/works/chatArch.png" alt="simpleChat Detail 1" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
