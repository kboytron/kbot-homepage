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
  <Layout title="Network Event Simulator">
    <Container>
      <Title>
        Network Event Simulator <Badge>2024</Badge>
      </Title>
      <P>
        Completed as part of the Spring 2024 offering of CS:3640 Introduction to Networks at the University of Iowa.
      </P>
      <br></br>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        A discrete event simulator for analyzing network behavior, focusing on packet transmission, 
        queuing, and propagation delays. The simulator models both simple point-to-point connections 
        and more complex switch-based topologies, tracking packet events through the network and 
        generating detailed timing analysis.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>Event System: Handles ENQUEUE, TRANSMIT, PROPAGATE, and RECEIVE events to simulate network behavior</ListItem>
        <ListItem>Multi-topology Support: Simulates both single-link and switch-based network configurations</ListItem>
        <ListItem>Performance Analysis: Generates detailed CSV reports tracking packet timing and delays at each network stage</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Matplotlib, NumPy, SciPy</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
            [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/eventsim.png" alt="eventSim Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'