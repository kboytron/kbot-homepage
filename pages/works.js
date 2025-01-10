import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbIncome from '../public/images/works/IncomeParser.png'
import sev from '../public/images/works/sev.png'
import linkbox from '../public/images/works/linkbox.png'
import flRecords from '../public/images/works/flRecords.jpg'
import dkstrad from '../public/images/works/dktrad.png'
import mp4 from '../public/images/works/mp4.png'
import mp5 from '../public/images/works/mp5.png'
import scene from '../public/images/works/scene.png'
import eventsim from '../public/images/works/eventsim.png'
import chat from '../public/images/works/chat.png'
import app from '../public/images/works/app.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
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

        <Section delay={0.1}>
          <WorkGridItem id="linkbox" thumbnail={linkbox} title="Linkbox">
            LinkTree like page with animated background
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          School Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="chatSystem" thumbnail={chat} title="Simple Chat">
            A messaging system featuring chat clients and a directory server
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="eventSim" thumbnail={eventsim} title="Network Event Simulator">
            A discrete event simulator to model network queuing and transmission time
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="treePlotter" thumbnail={mp4} title="treePlotter">
            A binary tree plotter written in assembly with dynamic size.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="dynamicListStack" thumbnail={mp5} title="ListStack in Assembly">
            A liststack implementation utilizing polymorphism and dynamic memory management
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="dijkstraduel" thumbnail={dkstrad} title="Dijkstra Duel">
            Implemented and compared two versions of Dijkstra&apos;s algorithm
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="flightRecords" thumbnail={flRecords} title="Flight Records">
            An efficient data querying tool leveraging sets and maps to handle large-scale flight data with high performance
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="scenePainter" thumbnail={scene} title="Scene Painter">
            A drawing application using objects and polymorphism
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="cieSocialApp" thumbnail={app} title="CIE Social App">
            A simple social media application featuring user profiles, status updates, and friend
            management
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
