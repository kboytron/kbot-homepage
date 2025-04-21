import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import sev from '../public/images/works/sev.webp'
import linkbox from '../public/images/works/linkbox.webp'
import flRecords from '../public/images/works/flRecords.webp'
import dkstrad from '../public/images/works/dktrad.webp'
import mp4 from '../public/images/works/tree.webp'
import mp5 from '../public/images/works/liststack.webp'
import scene from '../public/images/works/scene.webp'
import chat from '../public/images/works/simpleChat.webp'
import app from '../public/images/works/cieApp.webp'
import pscrip from '../public/images/works/pscrip.webp'
import asr from '../public/images/works/asr.webp'
import mct from '../public/images/works/mct.webp'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="solarenergyviz" thumbnail={sev} title="SolarEnergyViz.tech">
            Illuminating the benefits of solar energy through data-driven insights.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="mct" thumbnail={mct} title="MUTCoinTeam">
          SaaS platform for in-game currency trading with automation and secure backend.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="dijkstraduel" thumbnail={dkstrad} title="Dijkstra Duel">
            Implemented and compared two versions of Dijkstra&apos;s algorithm
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="asr" thumbnail={asr} title="SpeechServe">
          End-to-end speech recognition system using CTC and DNN.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pscrip" thumbnail={pscrip} title="Postscript Interpreter">
          Haskell based PostScript interpreter for 2D vector graphics with Cairo.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="chatSystem" thumbnail={chat} title="Simple Chat">
            A messaging system featuring chat clients and a directory server
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="treePlotter" thumbnail={mp4} title="Tree Plotter">
            A binary tree plotter written in assembly with dynamic size.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="dynamicListStack" thumbnail={mp5} title="ListStack-SMAL">
            A liststack implementation utilizing polymorphism and dynamic memory management
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="flightRecords" thumbnail={flRecords} title="Flight Records">
            A scalable query system for large flight datasets using sets and maps
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="linkbox" thumbnail={linkbox} title="Linkbox">
            LinkTree like page with animated background
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="scenePainter" thumbnail={scene} title="Scene Painter">
            A drawing application using objects and polymorphism
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="cieSocialApp" thumbnail={app} title="CIE Social App">
            C++ social app for managing user profiles, posts, and connections
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
