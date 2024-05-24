import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbIncome from '../public/images/works/IncomeParser.png'
import jobao from '../public/images/works/jobao.png'
import sev from '../public/images/works/sev.png'
import linkbox from '../public/images/works/linkbox.png'
import flRecords from '../public/images/works/flRecords.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem
            id="solarenergyviz"
            thumbnail={sev}
            title="SolarEnergyViz.tech"
          >
            Illuminating the benefits of solar energy through data-driven insights
            on panel efficiency and profitability.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="IncomeParser" title="IncomeParser" thumbnail={thumbIncome}>
            Automates accounting by parsing statements from popular payment apps, facilitating
            data-driven decisions.
          </WorkGridItem>
        </Section>

      </SimpleGrid>


      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          School Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        
        <Section delay={0.5}>
          <WorkGridItem id="jobAppOptimizer" thumbnail={jobao} title="JobAppOptimizer">
            Streamlines job search by collecting, processing and scheduling listings.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="linkbox" thumbnail={linkbox} title="Linkbox">
            LinkTree like page with animated background
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="flightRecords" thumbnail={flRecords} title="Flight Records">
            An efficient data querying tool leveraging sets and maps to handle large-scale flight data with high performance
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
