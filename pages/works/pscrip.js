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
    <Layout title="PostScript Interpreter">
      <Container>
        <Title>
          PostScript Interpreter <Badge>2024</Badge>
        </Title>
        <P>
          A Haskell-based interpreter for a subset of the PostScript programming language, designed to
          parse and execute stack-based commands for arithmetic, user-defined procedures, and
          2D vector graphics rendering. Programs are evaluated in a postfix notation environment,
          producing visual output using the Cairo graphics library.
        </P>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Key Features</Center>
        </Heading>
        <UnorderedList my={4}>
          <ListItem>
            <strong>Stack-Based Execution:</strong> Implements a postfix evaluation model for arithmetic
            operations and function calls.
          </ListItem>
          <ListItem>
            <strong>User-Defined Procedures:</strong> Allows creation and invocation of reusable command blocks.
          </ListItem>
          <ListItem>
            <strong>2D Graphics Rendering:</strong> Uses Cairo to generate scalable vector graphics based on
            interpreted PostScript instructions.
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Haskell, Cairo Graphics, Functional Programming</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="[Link to source code]">
              [Link to source code] <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Center my={6}>
          <WorkImage src="/images/works/postscript.png" alt="PostScript Interpreter Thumbnail" />
        </Center>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  