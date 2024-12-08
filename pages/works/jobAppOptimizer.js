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
    <Layout title="Job Search Optimizer">
      <Container>
        <Title>
          Job Search Optimizer <Badge>2023</Badge>
        </Title>
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
            <span>[Technologies used]</span>
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
          <WorkImage src="[Path to thumbnail image]" alt="[Project Title] Thumbnail" />
        </Center>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="[Path to detail image 1]" alt="[Project Title] Detail 1" />
          <WorkImage src="[Path to detail image 2]" alt="[Project Title] Detail 2" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  