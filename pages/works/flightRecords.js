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
  <Layout title="Flight Records">
    <Container>
      <Title>
        Flight Records <Badge>2022</Badge>
      </Title>
      <P>
        Completed as part of the Spring 2022 offering of CS:2230 Data Structures at the University of Iowa.
      </P>
      <br></br>
 
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        A Java-based flight database query system providing optimized analytics on US Department of Transportation flight data. 
        The project implements both direct data structure operations and an abstracted query language system. Using Sets and Maps 
        enables efficient core queries, while a reusable operation framework (Filter, Transform, GroupBy, etc.) allows for more 
        complex declarative queries with built-in result caching.
      </P>
 
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>Efficient Data Structures: Direct implementation using HashMaps and TreeSets for base queries</ListItem>
        <ListItem>Declarative Query Language: Reusable operations like Filter, Transform, and GroupBy for complex queries</ListItem>
        <ListItem>Performance Optimization: Query result caching and multiple route-finding algorithm implementations</ListItem>
      </UnorderedList>
 
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Commons CSV</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
            [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
 
      <Center my={6}>
        <WorkImage src="/images/works/flRecords.jpg" alt="FlightRecords Thumbnail" />
      </Center>
    </Container>
  </Layout>
 )
 
 export default Work
 export { getServerSideProps } from '../../components/chakra'