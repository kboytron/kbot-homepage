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
  <Layout title="Dijkstra Duel">
    <Container>
      <Title>
        Dijkstra Duel <Badge>2024</Badge>
      </Title>
      <P>
        Completed as part of the Spring 2024 offering of CS:3330 Algorithms at the University of Iowa.
      </P>
      <br></br>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        An implementation comparing two versions of Dijkstra&apos;s shortest path algorithm: a vanilla version 
        and an efficient version using a priority queue. The project analyzes performance differences 
        between the two approaches when finding shortest paths in large graphs, demonstrating the 
        practical impact of algorithmic optimization.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>Vanilla Implementation: Classic Dijkstra&apos;s algorithm using linear search for minimum distance vertex</ListItem>
        <ListItem>Optimized Version: Enhanced implementation utilizing priority queue for efficient vertex selection</ListItem>
        <ListItem>Performance Analysis: Runtime comparison between both versions with theoretical justification</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Priority Queue</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
            [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/dktrad.png" alt="Dijkstra Duel Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'