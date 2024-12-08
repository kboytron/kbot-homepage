/* eslint-disable no-unused-vars */
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  SimpleGrid,
  Center
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
        Completed as part of the Spring 2022 offering of CS:2230 Data Structures.
      </P>
      <P>
        [Brief description of the project, its purpose, and any unique features or challenges.]
      </P>
      <P>
        [Additional details about the project, such as technologies used, integration with other platforms, and user experience highlights.]
      </P>

      <UnorderedList my={4}>
        <ListItem>[Key feature 1]</ListItem>
        <ListItem>[Key feature 2]</ListItem>
        <ListItem>[Key feature 3]</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="[Link to source code]">
          [Link to source code] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="[Link to live project]">
          [Link to live project] <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/scene.png" alt="scenePainter Thumbnail" />
      </Center>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="[Path to detail image 1]" alt="scenePainter Detail 1" />
        <WorkImage src="[Path to detail image 2]" alt="scenePainter Detail 2" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
