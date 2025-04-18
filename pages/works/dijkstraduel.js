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

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        Dijkstra Duel is an interactive web-based tool for comparing two implementations of Dijkstra&apos;s shortest path algorithm:
        a classic version using linear search and an optimized version using a priority queue. The application visualizes
        algorithm execution on randomly generated graphs, allowing users to explore performance differences through side-by-side animations.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem><b>Dual Visualization:</b> Displays both algorithms side-by-side with live graph animations.</ListItem>
        <ListItem><b>Interactive Controls:</b> Adjustable number of nodes (5–25) and animation speed (100–1000 ms).</ListItem>
        <ListItem><b>Performance Metrics:</b> Real-time runtime and operation counts during execution.</ListItem>
        <ListItem><b>Shortest Path Tree:</b> Highlights the computed shortest-path tree at the end of each run.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dijkstra-duel.vercel.app/">
            https://dijkstra-duel.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, React.js, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/dijkstra-duel">
            GitHub <ExternalLinkIcon mx="2px" />
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
