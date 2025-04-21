import {
    Container,
    Badge,
    List,
    ListItem,
    UnorderedList,
    Center,
    Heading,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="MUTCoinTeam">
      <Container>
        <Title>
          MUTCoinTeam <Badge>2020-Present</Badge>
        </Title>
              <Center my={6}>
                <Image src="/images/works/mct_tech.webp" alt="icon" />
              </Center>
        <P>
          Designed, developed, and scaled an automation-driven SaaS platform for in-game currency trading
          in Madden, generating over $250K in revenue with 250+ highly rated transactions.
        </P>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Highlights</Center>
        </Heading>
        <UnorderedList my={4}>
          <ListItem>
            <strong>Efficient Automation:</strong> Built undetectable Python, C++, and .NET scripts to automate
            in-game asset generation with high efficiency.
          </ListItem>
          <ListItem>
            <strong>Real-Time Architecture:</strong> Engineered real-time event systems to enable
            multi-instance execution with minimal latency.
          </ListItem>
          <ListItem>
            <strong>Network Optimization:</strong> Utilized Wireshark to analyze traffic and optimize
            request-response cycles for better performance.
          </ListItem>
          <ListItem>
            <strong>Robust Infrastructure:</strong> Developed scalable backend systems to manage
            high-volume trades and ensure reliable product delivery.
          </ListItem>
          <ListItem>
            <strong>Business Strategy:</strong> Led growth initiatives through creator partnerships,
            marketing campaigns, and seller collaborations.
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, C++, .NET, Wireshark, Image Detection</span>
          </ListItem>
        </List>
  
        <Center my={6}>
          <WorkImage src="/images/works/mct_reviews.webp" alt="MUTCoinTeam Thumbnail" />
        </Center>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  