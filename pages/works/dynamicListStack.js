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
  <Layout title="ListStack-SMAL">
    <Container>
      <Title>
        ListStack-SMAL <Badge>2024</Badge>
      </Title>
      <P>
        An assembly-based implementation of a linked-list stack, 
        featuring dynamic memory management, robust exception handling, 
        and polymorphic integration within a hybrid stack framework. 
        Built using SMAL assembly language and the Hawk emulator, 
        this implementation emphasizes efficient memory operations and error resilience.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Dynamic Memory Allocation:</strong> Efficiently allocates and deallocates memory using MALLOC and FREE during push and pop operations, minimizing memory overhead.
        </ListItem>
        <ListItem>
          <strong>Exception Handling:</strong> Proactively manages errors by detecting and responding to stack overflow and underflow with customized STACKEXCEPT exceptions.
        </ListItem>
        <ListItem>
          <strong>Polymorphic Design:</strong> Seamlessly integrates with array-based stacks using a flexible, object-oriented design approach, promoting modularity and code reuse.
        </ListItem>
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
        <WorkImage src="/images/works/mp5.png" alt="ListStack-SMAL Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'