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
  <Layout title="CIE Social App">
    <Container>
      <Title>
        CIE Social App <Badge>2021</Badge>
      </Title>
      <P>
        Completed as part of the Fall 2021 offering of ENGR:2730 Computers in Engineering at the University of Iowa.
      </P>
      <br></br>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        A C++ social media application featuring user profile management and friend connections. 
        The application implements object-oriented design with separate Profile and ProfileDatabase 
        classes to handle user data and relationships. Users can create accounts, update their 
        status, manage friend connections, and view their social network through an interactive 
        command-line interface.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>User Authentication: Create, manage, and delete user profiles with unique usernames</ListItem>
        <ListItem>Social Features: Add/remove friends and update personal status messages</ListItem>
        <ListItem>Database Management: Maintain user records and relationships using C++ vectors</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++14, CMake 3.20</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
            [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/app.png" alt="CIE Social App Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'