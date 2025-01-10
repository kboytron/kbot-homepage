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
        Completed as part of the Spring 2024 offering of CS:2630 Computer Organization at the University of Iowa.
      </P>
      <br></br>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      <P>
        An assembly language program that recursively plots binary trees using ASCII art. The program automatically 
        calculates and displays the largest possible tree that will fit in the Hawk emulator&apos;s display window, 
        using depth-first traversal to draw branches with forward and backward slashes.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>Recursive Drawing: Uses depth-first search to plot branches, with size calculated as 2^n-depth</ListItem>
        <ListItem>Dynamic Sizing: Automatically determines maximum tree height based on window dimensions</ListItem>
        <ListItem>Screen Management: Centers output and handles coordinate calculations in assembly</ListItem>
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
        <WorkImage src="/images/works/mp4.png" alt="treePlotter Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'