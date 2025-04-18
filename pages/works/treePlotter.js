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
  <Layout title="Tree Plotter">
    <Container>
      <Title>
        Tree Plotter <Badge>2024</Badge>
      </Title>

      <P>
        A recursive assembly program that dynamically plots perfectly scaled binary trees as ASCII art. Utilizing depth-first traversal, it automatically calculates optimal tree dimensions, adjusts branch sizes based on emulator screen constraints, and demonstrates precise control over recursion, geometry, and low-level I/O.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Recursive Traversal:</strong> Implements depth-first recursion to accurately render tree structures, with node widths computed dynamically.
        </ListItem>
        <ListItem>
          <strong>Dynamic Scaling:</strong> Automatically adjusts the size and layout of the binary tree based on the current emulator window dimensions.
        </ListItem>
        <ListItem>
          <strong>Low-Level Rendering:</strong> Directly manages screen coordinates and rendering logic using SMAL assembly for precise positioning and visual clarity.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SMAL Assembly, Hawk Emulator</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/tree-plotter" isExternal>
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/mp4.png" alt="Tree Plotter Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
