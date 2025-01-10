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
        Completed as part of the Spring 2024 offering of CS:3640 Introduction to Networks at the University of Iowa.
      </P>
      <br></br>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        A Python-based messaging system implementing a chat client and directory server architecture. 
        The chat clients communicate with the directory server using TCP to register and lookup users, 
        while client-to-client messaging is handled through UDP sockets. Messages are encoded in JSON 
        format for standardized communication between components.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>User Registration: Clients register their username and IP:port with the directory server via TCP</ListItem>
        <ListItem>Message Exchange: Direct client-to-client communication using UDP sockets</ListItem>
        <ListItem>Multi-threaded Design: Separate threads for handling incoming messages and user input</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, socket, threading, JSON</span>
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