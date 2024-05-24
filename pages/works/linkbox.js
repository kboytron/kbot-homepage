/* eslint-disable no-unused-vars */
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="LinkBox">
    <Container>
      <Title>
        LinkBox <Badge>2023</Badge>
      </Title>
      <P>
        A Linktree type website featuring an animated background
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Vanta.js</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/LinkBox">
          github.com/kboytron/LinkBox
          </Link>
        </ListItem>
      </List>
{/* 
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://www.donpy.net/standard-entry/app-reiview/4303.html">
            <Badge mr={2}>覚醒する @CDiP</Badge>
            Webアプリ版twitterクライアントの「pichu*pichu」が凄い。{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://labs.laurahouse.net/articles/iphone/1115.html">
            <Badge mr={2}>LauraHouse Labs</Badge>
            知っておきたいWebアプリ版Twitterクライアント活用法{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/pichu2_eyecatch.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/pichu2_01.png" alt="Pichu*Pichu" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
