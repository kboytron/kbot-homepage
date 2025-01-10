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
  <Layout title="Dynamic ListStack">
    <Container>
      <Title>
        ListStack in Assembly <Badge>2024</Badge>
      </Title>
      <P>
        Completed as part of the Spring 2024 offering of CS:2630 Computer Organization at the University of Iowa.
      </P>
      <br></br>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        An assembly language implementation of a dynamic stack data structure using linked lists. 
        The project implements memory management with MALLOC and FREE operations, along with 
        exception handling for stack overflow and underflow conditions. This implementation 
        serves as part of a larger stack comparison framework running on the Hawk emulator.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>Dynamic Memory: Uses MALLOC for node creation during push operations and FREE for cleanup during pop operations</ListItem>
        <ListItem>Exception Handling: Implements stack overflow and underflow detection with STACKEXCEPT throws</ListItem>
        <ListItem>Object-Oriented Design: Follows a class-based structure with inheritance from a generic stack interface</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SMAL Assembly, Hawk Emulator</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
            [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/mp5.png" alt="dynamicListStack Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'