import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  //Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="solarEnergyViz">
    <Container>
      <Title>
        SolarEnergyViz.tech <Badge>2023</Badge>
      </Title>
      {/* <Center my={6}>
        <Image src="/images/works/freedbtagger_icon.gif" alt="icon" />
</Center>*/}
      <P style={{ marginBottom: '1em' }}>  
        Analyze and visualize solar panel data by comparing amorphous and poly-crystalline solar panels.
      </P>

      <P>
        Developed for the Engie challenge at HackUIowa with elements of GitHubOps, DevOps, and WebDev,
        this project investigates the differences between triple-junction amorphous and poly-crystalline solar panels.
        It informs users about the benefits of switching to solar energy. The project features a profit calculator,
        a comparison tool for the two types of solar panels, and visualizations of data from the University of Iowa&apos;s Electric Vehicle Charging Array over the last 12 years.
        Key features include time-series prediction to fill data gaps, automatic data cleaning, and efficiency visualization.
        Personal accomplishments include extensive use of the pandas library for data cleaning and restructuring, and handling 10 years of solar data.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, HTML, CSS, JavaScript, Pandas, Prophet, Seaborn, GitHub, Netlify</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/SolarEnergyViz.tech">
            github.com/kboytron/SolarEnergyViz.tech
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blog</Meta>
          <Link href="https://devpost.com/software/solarenergyviz-tech">
            devpost.com
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Awards</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          {/* <Link href="https://forest.watch.impress.co.jp/article/2005/02/01/freedbtagger.html"> */}
            <Badge mr={2}>Best Data Visualization</Badge>
            <span>Sponsored by Leepfrog</span>
          {/* </Link> */}
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/works/convEfficiency.png" alt="solarenergyviz" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
