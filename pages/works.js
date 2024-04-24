import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import jobao from '../public/images/works/jobao.png'
import thumbMaxi from '../public/images/works/maxi.png'
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
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="jobAppOptimizer" thumbnail={jobao} title="JobApp Optimizer">
          Streamlines job search by collecting, processing and scheduling listings.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="Maxi" thumbnail={thumbMaxi} title="Maxi">
          A goal setting, productivity, and mental reprogramming tool 
          with AI-powered voice assistant to level you up in every area 
          of your life.
          </WorkGridItem>
        </Section>
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
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
