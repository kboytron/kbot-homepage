import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Flight Records">
    <Container>
      <Title>
        Flight Records <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/flquery.webp" alt="icon" />
      </Center>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        This system analyzes and queries large datasets from the US Department of Transportation&apos;s flight records.
        Leveraging efficient data structures and abstraction, it enables users to filter, transform, and aggregate data
        declaratively. The project emphasizes modular design and performance, supporting complex queries through reusable
        components and optimized algorithms.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <b>Data Structure Efficiency:</b> Direct implementation using <i>HashMaps</i> and <i>TreeSets</i> enables fast lookups and filtering for base queries.
        </ListItem>
        <ListItem>
          <b>Declarative Query Language:</b> Provides reusable operations like <i>Filter</i>, <i>Transform</i>, and <i>GroupBy</i> to simplify complex data queries.
        </ListItem>
        <ListItem>
          <b>Performance Optimization:</b> Implements caching to minimize repeated query execution time, improving scalability across large datasets.
        </ListItem>
        <ListItem>
          <b>Multi-Algorithm Solutions:</b> Includes route-finding algorithms and multiple query-processing strategies for various performance scenarios.
        </ListItem>
        <ListItem>
          <b>Test-Driven Development:</b> Verified system functionality and correctness through unit tests using <i>JUnit</i>.
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Technologies</Center>
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>Commons CSV, JUnit</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>IntelliJ IDEA, Git</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/flight-records">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
