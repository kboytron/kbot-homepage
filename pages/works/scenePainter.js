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
      <P>
        Completed as part of the Spring 2022 offering of CS:2230 Data Structures at the University of Iowa.
      </P>
      <br></br>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        A Java graphics system implementing an object-oriented approach to drawing digital scenes. The application 
        uses the BRIDGES visualization library to render primitive shapes like points, lines, and circles onto a 
        pixel grid. Each shape is represented as a Mark object that can be added, deleted and modified within a Scene.
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
          <Link href="[Link to source code]">
            [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/scene.png" alt="scenePainter Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'