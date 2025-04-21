import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="solarEnergyViz">
    <Container>
      <Title>
        SolarEnergyViz.tech <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/sev_arch.webp" alt="icon" />
      </Center>
      <P style={{ marginBottom: '1em' }}>
        Analyze and visualize solar panel data by comparing amorphous and poly-crystalline solar panels.
      </P>

      <P style={{ marginBottom: '1em' }}>
        Developed for the Engie challenge at HackUIowa with elements of GitHubOps, DevOps, and WebDev,
        this project investigates the differences between triple-junction amorphous and poly-crystalline solar panels.
        It informs users about the benefits of switching to solar energy.
      </P>

      <P style={{ marginBottom: '1em' }}>
        The project features a profit calculator, a comparison tool for the two types of solar panels,
        and visualizations of data from the University of Iowa&apos;s Electric Vehicle Charging Array over the last 12 years.
      </P>

      <P style={{ marginBottom: '1em' }}>
        Key features include time-series prediction to fill data gaps, automatic data cleaning, and efficiency visualization.
      </P>

      <P>
        Personal accomplishments include extensive use of the pandas library for data cleaning and restructuring,
        and handling 10 years of solar data.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, HTML, CSS, JavaScript, Pandas, Prophet, Seaborn, GitHub, Netlify</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/kboytron/SolarEnergyViz.tech">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blog</Meta>
          <Link href="https://devpost.com/software/solarenergyviz-tech">
            Devpost <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Awards</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Best Data Visualization</Badge>
          <span>Sponsored by Leepfrog</span>
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/works/convEfficiency.webp" alt="solarenergyviz" />
      <WorkImage src="/images/works/sev_award.webp" alt="solarenergyviz_pic" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
