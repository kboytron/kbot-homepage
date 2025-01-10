/* eslint-disable no-unused-vars */
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="IncomeParser">
    <Container>
      <Title>
        IncomeParser <Badge>2024</Badge>
      </Title>
      <P>
        Automated accounting using python to parse statements from PayPal, CashApp, Venmo, etc.
      </P>
      <P>
        A key player in the operations of my coin-selling operation.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Takes in PDF Files provided by payment provider</ListItem>
        <ListItem>Stores relevant transactions in CSV</ListItem>
        <ListItem>
          User is free to do any analysis they desire inside of the CSV output
        </ListItem>
        <ListItem>
          Further automation ideas are to get statements from API, 
          and to update the data automatically every month
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <span>Coming Soon!</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
