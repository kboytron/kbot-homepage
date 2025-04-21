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
  <Layout title="Scene Painter">
    <Container>
      <Title>
        Scene Painter <Badge>2022</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
      Scene Painter is a pixel-based drawing tool built in Java using an object-oriented design. 
      It leverages the BRIDGES visualization library to render shapes like points, lines, and circles on a grid. 
      Users can dynamically add, layer, and remove shapes using color-coded logic and Bresenham&apos;s algorithms.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>Drawing Primitives: Points, horizontal/vertical/diagonal lines, and circles using Bresenham&apos;s algorithms</ListItem>
        <ListItem>Scene Management: Dynamic addition and removal of shapes with layering and color-based deletion</ListItem>
        <ListItem>Object-Oriented Design: Inheritance hierarchy with abstract Mark class and concrete shape implementations</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, BRIDGES Visualization Library</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/scenePainter">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/scene.webp" alt="scenePainter Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'